import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Feed } from './features/feed/feed';
import { WaiterPanel } from './features/waiter/waiter-panel';
import { AdminPanel } from './features/admin/admin-panel';
import { OrderService } from './core/services/order.service';
import { AuthService } from './core/services/auth.service';
import { Role } from './core/models/user.model';

export type DemoView = 'cliente' | 'mozos' | 'admin';

@Component({
  selector: 'app-root',
  imports: [Feed, WaiterPanel, AdminPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly orderService = inject(OrderService);
  private readonly authService = inject(AuthService);

  readonly currentView = signal<DemoView>('cliente');
  readonly pendingOrdersCount = this.orderService.pendingOrdersCount;
  readonly activeOrdersCount = this.orderService.activeOrdersCount;

  setView(view: DemoView): void {
    this.currentView.set(view);
    const roleMap: Record<DemoView, Role> = {
      cliente: 'cliente',
      mozos: 'mozo',
      admin: 'admin',
    };
    this.authService.setRole(roleMap[view]);
  }
}
