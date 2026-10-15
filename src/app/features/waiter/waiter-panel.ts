import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order, OrderStatus } from '../../core/models/order.model';

@Component({
  selector: 'app-waiter-panel',
  imports: [CurrencyPipe],
  templateUrl: './waiter-panel.html',
  styleUrl: './waiter-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaiterPanel {
  private readonly orderService = inject(OrderService);

  readonly orders = this.orderService.orders;
  readonly activeOrdersCount = this.orderService.activeOrdersCount;
  readonly pendingOrdersCount = this.orderService.pendingOrdersCount;
  readonly preparingOrdersCount = this.orderService.preparingOrdersCount;

  readonly statusFilter = signal<string>('todos');
  readonly tableFilter = signal<string>('todas');

  readonly tables = ['todas', 'Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6', 'Mesa 7'];

  readonly filteredOrders = computed(() => {
    let list = this.orders();
    const status = this.statusFilter();
    const table = this.tableFilter();

    if (status !== 'todos') {
      list = list.filter((o) => o.status === status);
    }
    if (table !== 'todas') {
      list = list.filter((o) => o.table === table);
    }

    return list;
  });

  setStatusFilter(status: string): void {
    this.statusFilter.set(status);
  }

  setTableFilter(table: string): void {
    this.tableFilter.set(table);
  }

  advanceStatus(order: Order): void {
    const nextStatus: Record<OrderStatus, OrderStatus> = {
      pendiente: 'preparando',
      preparando: 'entregado',
      entregado: 'cobrado',
      cobrado: 'cobrado',
      cancelado: 'cancelado',
    };
    this.orderService.updateOrderStatus(order.id, nextStatus[order.status]);
  }

  cancelOrder(orderId: string): void {
    if (confirm('¿Seguro que deseas anular esta comanda?')) {
      this.orderService.updateOrderStatus(orderId, 'cancelado');
    }
  }

  getStatusBadgeClass(status: OrderStatus): string {
    switch (status) {
      case 'pendiente':
        return 'badge-pending';
      case 'preparando':
        return 'badge-preparing';
      case 'entregado':
        return 'badge-delivered';
      case 'cobrado':
        return 'badge-paid';
      case 'cancelado':
        return 'badge-cancelled';
      default:
        return '';
    }
  }

  getStatusLabel(status: OrderStatus): string {
    switch (status) {
      case 'pendiente':
        return 'Pendiente';
      case 'preparando':
        return 'En Cocina';
      case 'entregado':
        return 'En Mesa';
      case 'cobrado':
        return 'Cobrado';
      case 'cancelado':
        return 'Cancelado';
      default:
        return status;
    }
  }

  getNextActionLabel(status: OrderStatus): string {
    switch (status) {
      case 'pendiente':
        return 'Mandar a Cocina';
      case 'preparando':
        return 'Marcar Entregado';
      case 'entregado':
        return 'Cobrar Mesa';
      default:
        return '';
    }
  }

  getTimeElapsed(date: Date): string {
    const diffMin = Math.round((Date.now() - new Date(date).getTime()) / 60000);
    if (diffMin <= 0) return 'Hace instantes';
    if (diffMin === 1) return 'Hace 1 min';
    return `Hace ${diffMin} min`;
  }
}
