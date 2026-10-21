import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { AuthService } from '../../core/services/auth.service';
import { InboxMessage, InboxService } from '../../core/services/inbox.service';
import { Dish, Promo } from '../../core/models/dish.model';
import { CustomRole, RolePermissions, StaffUser } from '../../core/models/user.model';

type AdminTab = 'dishes' | 'promo' | 'inbox';

@Component({
  selector: 'app-admin-panel',
  imports: [CurrencyPipe, DatePipe, SlicePipe],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanel {
  private readonly menuService = inject(MenuService);
  private readonly authService = inject(AuthService);
  private readonly inboxService = inject(InboxService);

  readonly openComposerRequested = output<void>();

  readonly activeTab = signal<AdminTab>('dishes');

  // ---------- Bandeja de entrada (comentarios y mensajes privados) ----------
  readonly inbox = this.inboxService.messages;
  readonly unreadCount = this.inboxService.unreadCount;
  readonly moodEmoji: Record<number, string> = { 1: '😡', 2: '😕', 3: '😐', 4: '🙂', 5: '😍' };

  // ---------- Promo y destacados ----------
  readonly featuredDishes = this.menuService.featuredDishes;
  readonly promoDraft = signal<Promo>({ ...this.menuService.promo() });
  readonly promoSaved = signal(false);
  readonly promoPreviewDish = computed(() =>
    this.allDishes().find((d) => d.id === this.promoDraft().dishId),
  );

  // ---------- Edición de un plato ----------
  readonly editing = signal<Dish | null>(null);
  readonly editName = signal('');
  readonly editDesc = signal('');
  readonly editPrice = signal(0);
  readonly editCategory = signal('');
  readonly editTags = signal('');
  readonly editInStock = signal(true);
  readonly editFeatured = signal(false);

  readonly categories = this.menuService.categories;
  readonly allDishes = this.menuService.dishes;
  /** Fotos ilustrativas (no son del restaurante) que hay que ir reemplazando. */
  readonly placeholderCount = computed(
    () => this.allDishes().filter((d) => d.photoIsPlaceholder).length,
  );
  readonly onlyPlaceholders = signal(false);
  readonly dishes = computed(() =>
    this.onlyPlaceholders()
      ? this.allDishes().filter((d) => d.photoIsPlaceholder)
      : this.allDishes(),
  );
  readonly staffUsers = this.authService.staffUsers;
  readonly roles = this.authService.roles;
  readonly permissions = this.authService.permissions;

  // Formulario nuevo plato (rápido)
  readonly newDishName = signal('');
  readonly newDishCategory = signal('pastas');
  readonly newDishPrice = signal<number>(8500);
  readonly newDishDesc = signal('');
  readonly newDishImageUrl = signal('');
  readonly newDishTags = signal('Especialidad, Pasta fresca');
  readonly showDishForm = signal(false);

  // Formulario nuevo usuario
  readonly newUserName = signal('');
  readonly newUserNickname = signal('');
  readonly newUserEmail = signal('');
  readonly newUserRole = signal('mozo');
  readonly newUserPin = signal('1122');
  readonly showUserForm = signal(false);

  // Formulario nuevo rol
  readonly showRoleForm = signal(false);
  readonly newRoleName = signal('');
  readonly newRoleDesc = signal('');
  readonly newRoleBadge = signal('role-custom');
  readonly rolePermissionsState = signal<RolePermissions>({
    canCreateDishes: false,
    canEditDishes: false,
    canEditPrices: false,
    canToggleStock: true,
    canDeleteDishes: false,
    canViewOrders: true,
    canAdvanceOrderStatus: true,
    canCancelOrders: false,
    canCloseTables: false,
    canViewKitchenKDS: false,
    canAlertKitchenStock: false,
    canManageStaff: false,
    canManageRoles: false,
    canConfigurePOS: false,
  });

  // Estado Fudo POS
  readonly fudoApiKey = signal('fudo_live_79a2b8e3914fc019');
  readonly fudoBranchId = signal('sucursal_central');
  readonly fudoAutoSyncMenu = signal(true);
  readonly fudoAutoPushOrders = signal(true);
  readonly fudoSyncStatus = signal<string | null>(null);

  /** Sube una foto propia para el plato (sin servidor, queda en esta sesión del navegador). */
  onPhotoSelected(dishId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => this.menuService.replaceDishPhoto(dishId, String(reader.result));
    reader.readAsDataURL(file);
    input.value = '';
  }

  setTab(tab: AdminTab): void {
    if (tab === 'promo') {
      this.promoDraft.set({ ...this.menuService.promo() });
      this.promoSaved.set(false);
    }
    this.activeTab.set(tab);
  }

  categoryLabel(categoryId: string): string {
    return this.categories().find((c) => c.id === categoryId)?.label ?? categoryId;
  }

  categoryColor(categoryId: string): string {
    return this.categories().find((c) => c.id === categoryId)?.color ?? '#999';
  }

  toggleFeatured(dishId: string): void {
    this.menuService.toggleFeatured(dishId);
  }

  // ---------- Edición ----------
  startEdit(dish: Dish): void {
    this.editing.set(dish);
    this.editName.set(dish.name);
    this.editDesc.set(dish.description);
    this.editPrice.set(dish.price);
    this.editCategory.set(dish.categoryId);
    this.editTags.set(dish.tags.map((t) => t.trim()).join(', '));
    this.editInStock.set(dish.inStock);
    this.editFeatured.set(!!dish.featured);
  }

  cancelEdit(): void {
    this.editing.set(null);
  }

  saveEdit(): void {
    const dish = this.editing();
    const name = this.editName().trim();
    if (!dish || !name) {
      return;
    }
    this.menuService.updateDish(dish.id, {
      name,
      description: this.editDesc().trim(),
      price: Math.max(0, Math.round(Number(this.editPrice()) || 0)),
      categoryId: this.editCategory(),
      tags: this.editTags()
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      inStock: this.editInStock(),
      featured: this.editFeatured(),
    });
    this.editing.set(null);
  }

  // ---------- Promo ----------
  updatePromo(changes: Partial<Promo>): void {
    this.promoDraft.update((p) => ({ ...p, ...changes }));
    this.promoSaved.set(false);
  }

  /** Al elegir otro plato, propone su nombre y descripción como textos del banner. */
  selectPromoDish(dishId: string): void {
    const dish = this.allDishes().find((d) => d.id === dishId);
    this.updatePromo({
      dishId,
      title: dish?.name ?? this.promoDraft().title,
      subtitle: dish?.description ?? this.promoDraft().subtitle,
    });
  }

  savePromo(): void {
    this.menuService.setPromo({ ...this.promoDraft() });
    this.promoSaved.set(true);
  }

  // ---------- Bandeja ----------
  toggleRead(message: InboxMessage): void {
    this.inboxService.markRead(message.id, !message.read);
  }

  markAllRead(): void {
    this.inboxService.markAllRead();
  }

  deleteMessage(id: string): void {
    if (confirm('¿Eliminar este mensaje?')) {
      this.inboxService.remove(id);
    }
  }

  whatsappLink(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    return `https://wa.me/${digits.startsWith('54') ? digits : '549' + digits}`;
  }

  toggleDishStock(dishId: string): void {
    this.menuService.toggleDishStock(dishId);
  }

  deleteDish(dishId: string): void {
    if (confirm('¿Eliminar este plato de la carta?')) {
      this.menuService.deleteDish(dishId);
    }
  }

  createDish(): void {
    const name = this.newDishName().trim();
    if (!name) return;

    const tags = this.newDishTags()
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    this.menuService.addDish({
      name,
      categoryId: this.newDishCategory(),
      price: Number(this.newDishPrice()),
      description: this.newDishDesc().trim() || 'Elaboración artesanal con los mejores ingredientes.',
      tags,
      inStock: true,
      imageUrl: this.newDishImageUrl().trim() || undefined,
      bgGradient: 'linear-gradient(160deg,#2a1f1a,#140e0a 70%)',
    });

    this.newDishName.set('');
    this.newDishDesc.set('');
    this.showDishForm.set(false);
  }

  toggleUserActive(userId: string): void {
    this.authService.toggleUserActive(userId);
  }

  deleteUser(userId: string): void {
    if (confirm('¿Eliminar este empleado del sistema?')) {
      this.authService.deleteUser(userId);
    }
  }

  createUser(): void {
    const name = this.newUserName().trim();
    const email = this.newUserEmail().trim() || `${name.toLowerCase().replace(/\s+/g, '')}@ilmaterello.com`;
    if (!name) return;

    this.authService.registerStaff({
      name,
      nickname: this.newUserNickname().trim() || name.toLowerCase().replace(/\s+/g, '_'),
      email,
      roleId: this.newUserRole(),
      pin: this.newUserPin().trim() || '1234',
    });

    this.newUserName.set('');
    this.newUserNickname.set('');
    this.newUserEmail.set('');
    this.showUserForm.set(false);
  }

  // ROLES
  toggleRolePermission(key: keyof RolePermissions): void {
    this.rolePermissionsState.update((curr) => ({
      ...curr,
      [key]: !curr[key],
    }));
  }

  createRole(): void {
    const name = this.newRoleName().trim();
    if (!name) return;

    this.authService.createRole({
      name,
      description: this.newRoleDesc().trim() || 'Rol personalizado para el salón o cocina.',
      badgeClass: 'role-custom',
      permissions: { ...this.rolePermissionsState() },
    });

    this.newRoleName.set('');
    this.newRoleDesc.set('');
    this.showRoleForm.set(false);
  }

  deleteRole(roleId: string): void {
    if (confirm('¿Deseas eliminar este rol?')) {
      const ok = this.authService.deleteRole(roleId);
      if (!ok) {
        alert('Los roles pre-cargados del sistema no pueden eliminarse.');
      }
    }
  }

  getRole(roleId: string): CustomRole | undefined {
    return this.roles().find((r) => r.id === roleId);
  }

  getRoleName(roleId: string): string {
    return this.getRole(roleId)?.name || roleId;
  }

  getRoleBadgeClass(roleId: string): string {
    return this.getRole(roleId)?.badgeClass || 'role-custom';
  }

  getUserCountForRole(roleId: string): number {
    return this.staffUsers().filter((u) => u.roleId === roleId).length;
  }

  openReelComposer(): void {
    this.openComposerRequested.emit();
  }

  simulateFudoSync(): void {
    this.fudoSyncStatus.set('Conectando a API de Fudo (https://api.fu.do/v1)...');
    setTimeout(() => {
      this.fudoSyncStatus.set('Sincronización exitosa: Catálogo y comanderas enlazadas con Fudo POS.');
    }, 1200);
  }
}
