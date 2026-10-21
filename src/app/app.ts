import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Feed } from './features/feed/feed';
import { WaiterPanel } from './features/waiter/waiter-panel';
import { AdminPanel } from './features/admin/admin-panel';
import { ReelComposer } from './features/feed/reel-composer/reel-composer';
import { ProfileModal } from './features/profile/profile-modal/profile-modal';
import { StaffAuthModal } from './features/auth/staff-auth-modal/staff-auth-modal';
import { OrderService } from './core/services/order.service';
import { AuthService } from './core/services/auth.service';
import { ProfileService } from './core/services/profile.service';
import { Dish } from './core/models/dish.model';

export type DemoView = 'cliente' | 'mozos' | 'admin';

@Component({
  selector: 'app-root',
  imports: [
    Feed,
    WaiterPanel,
    AdminPanel,
    ReelComposer,
    ProfileModal,
    StaffAuthModal,
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
  readonly isStaffAuthOpen = signal(false);

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
    // Si el personal ya tenía la sesión abierta, arranca en su pantalla de trabajo
    if (this.staffUser()) {
      this.currentView.set(this.defaultStaffView());
    }
  }

  openProfileModal(): void {
    this.isProfileModalOpen.set(true);
  }

  closeProfileModal(): void {
    this.isProfileModalOpen.set(false);
  }

  openStaffAuth(): void {
    this.isStaffAuthOpen.set(true);
  }

  closeStaffAuth(): void {
    this.isStaffAuthOpen.set(false);
  }

  onStaffLoginSuccess(): void {
    this.setView(this.defaultStaffView());
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

  /** Las vistas de personal solo se abren con sesión iniciada. */
  setView(view: DemoView): void {
    if (view !== 'cliente' && !this.staffUser()) {
      this.openStaffAuth();
      return;
    }
    this.currentView.set(view);
  }
}
