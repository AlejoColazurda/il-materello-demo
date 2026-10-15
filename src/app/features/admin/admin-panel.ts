import { CurrencyPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { AuthService } from '../../core/services/auth.service';
import { Dish } from '../../core/models/dish.model';
import { Role } from '../../core/models/user.model';

@Component({
  selector: 'app-admin-panel',
  imports: [CurrencyPipe, SlicePipe, UpperCasePipe],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanel {
  private readonly menuService = inject(MenuService);
  private readonly authService = inject(AuthService);

  readonly activeTab = signal<'dishes' | 'users' | 'fudo'>('dishes');

  readonly categories = this.menuService.categories;
  readonly dishes = this.menuService.dishes;
  readonly users = this.authService.users;
  readonly permissions = this.authService.permissions;

  // Formulario nuevo plato
  readonly newDishName = signal('');
  readonly newDishCategory = signal('pastas');
  readonly newDishPrice = signal<number>(8500);
  readonly newDishDesc = signal('');
  readonly newDishImageUrl = signal('https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80');
  readonly newDishTags = signal('⭐ Especialidad, 🍝 Pasta fresca');
  readonly showDishForm = signal(false);

  // Formulario nuevo usuario
  readonly newUserName = signal('');
  readonly newUserRole = signal<Role>('mozo');
  readonly newUserPin = signal('1122');
  readonly showUserForm = signal(false);

  // Estado Fudo POS
  readonly fudoApiKey = signal('fudo_live_79a2b8e3914fc019');
  readonly fudoBranchId = signal('sucursal_palermo_central');
  readonly fudoAutoSyncMenu = signal(true);
  readonly fudoAutoPushOrders = signal(true);
  readonly fudoSyncStatus = signal<string | null>(null);

  setTab(tab: 'dishes' | 'users' | 'fudo'): void {
    this.activeTab.set(tab);
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

    // Reset form
    this.newDishName.set('');
    this.newDishDesc.set('');
    this.showDishForm.set(false);
  }

  toggleUserActive(userId: string): void {
    this.authService.toggleUserActive(userId);
  }

  createUser(): void {
    const name = this.newUserName().trim();
    if (!name) return;

    this.authService.addUser(name, this.newUserRole(), this.newUserPin());
    this.newUserName.set('');
    this.showUserForm.set(false);
  }

  simulateFudoSync(): void {
    this.fudoSyncStatus.set('Conectando a API de Fudo (https://api.fu.do/v1)...');
    setTimeout(() => {
      this.fudoSyncStatus.set('✓ Sincronización exitosa: 11 productos y 6 categorías enlazadas con Fudo POS.');
    }, 1200);
  }
}
