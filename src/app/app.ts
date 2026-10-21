import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Feed } from './features/feed/feed';
import { WaiterPanel } from './features/waiter/waiter-panel';
import { AdminPanel } from './features/admin/admin-panel';
import { ReelComposer } from './features/feed/reel-composer/reel-composer';
import { ProfileModal } from './features/profile/profile-modal/profile-modal';
import { OrderService } from './core/services/order.service';
import { AuthService } from './core/services/auth.service';
import { ProfileService } from './core/services/profile.service';
import { Dish } from './core/models/dish.model';
import { ADMIN_TOKEN_PARAM } from './core/config/admin-access';

export type DemoView = 'cliente' | 'mozos' | 'admin';

@Component({
  selector: 'app-root',
  imports: [
    Feed,
    WaiterPanel,
    AdminPanel,
    ReelComposer,
    ProfileModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly orderService = inject(OrderService);
  private readonly authService = inject(AuthService);
  private readonly profileService = inject(ProfileService);

  readonly currentView = signal<DemoView>('cliente');
  readonly isReelComposerOpen = signal(false);
  readonly isProfileModalOpen = signal(false);

  readonly userProfile = this.profileService.profile;
  readonly staffUser = this.authService.currentStaffUser;
  readonly pendingOrdersCount = this.orderService.pendingOrdersCount;
  readonly activeOrdersCount = this.orderService.activeOrdersCount;
  readonly permissions = this.authService.permissions;

  readonly canSeeOrders = computed(
    () => this.permissions().canViewOrders || this.permissions().canViewKitchenKDS,
  );
  readonly canSeeAdmin = computed(
    () =>
      this.permissions().canEditDishes ||
      this.permissions().canManageStaff ||
      this.permissions().canManageRoles,
  );
  readonly roleLabel = computed(() => this.authService.currentRole()?.name ?? 'Personal');
  /** Pantalla de inicio de cada rol al entrar o tocar el logo. */
  readonly defaultStaffView = computed<DemoView>(() =>
    this.canSeeAdmin() ? 'admin' : this.canSeeOrders() ? 'mozos' : 'cliente',
  );

  constructor() {
    // Si el administrador ya tenía la sesión abierta, arranca en su pantalla de trabajo
    if (this.staffUser()) {
      this.currentView.set(this.defaultStaffView());
    }
    void this.checkAdminTokenInUrl();
  }

  openProfileModal(): void {
    this.isProfileModalOpen.set(true);
  }

  closeProfileModal(): void {
    this.isProfileModalOpen.set(false);
  }

  logoutStaff(): void {
    this.authService.logout();
    this.setView('cliente');
  }

  openReelComposer(): void {
    this.isReelComposerOpen.set(true);
  }

  closeReelComposer(): void {
    this.isReelComposerOpen.set(false);
  }

  onReelCreated(dish: Dish): void {
    this.isReelComposerOpen.set(false);
    this.setView('cliente');
  }

  /** Las vistas de administración solo se abren con la sesión del administrador. */
  setView(view: DemoView): void {
    if (view !== 'cliente' && !this.staffUser()) {
      return;
    }
    this.currentView.set(view);
  }

  /** Si la URL trae ?acceso=<token> válido, abre la administración y limpia la URL. */
  private async checkAdminTokenInUrl(): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }
    const url = new URL(window.location.href);
    const token = url.searchParams.get(ADMIN_TOKEN_PARAM);
    if (!token) {
      return;
    }
    url.searchParams.delete(ADMIN_TOKEN_PARAM);
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);

    if (await this.authService.loginWithAdminToken(token)) {
      this.currentView.set('admin');
    }
  }
}
