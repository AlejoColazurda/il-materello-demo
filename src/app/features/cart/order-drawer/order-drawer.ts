import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-drawer',
  imports: [CurrencyPipe],
  templateUrl: './order-drawer.html',
  styleUrl: './order-drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDrawer {
  private readonly cartService = inject(CartService);
  private readonly orderService = inject(OrderService);

  readonly isOpen = this.cartService.isDrawerOpen;
  readonly lines = this.cartService.lines;
  readonly totalPrice = this.cartService.totalPrice;

  readonly selectedTable = signal('Mesa 4');
  readonly customerName = signal('');
  readonly orderNotes = signal('');
  readonly submittedOrder = signal<Order | null>(null);

  readonly tables = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6', 'Mesa 7', 'Barra'];

  close(): void {
    this.submittedOrder.set(null);
    this.cartService.closeDrawer();
  }

  add(dishId: string): void {
    this.cartService.add(dishId);
  }

  remove(dishId: string): void {
    this.cartService.remove(dishId);
  }

  setTable(table: string): void {
    this.selectedTable.set(table);
  }

  /**
   * Envía la comanda al mozo / sistema de cocina en tiempo real
   */
  submitOrderToStaff(): void {
    const lines = this.lines();
    if (lines.length === 0) {
      return;
    }

    const order = this.orderService.createOrder(
      this.selectedTable(),
      lines,
      this.customerName().trim() || undefined,
      this.orderNotes().trim() || undefined,
    );

    this.submittedOrder.set(order);

    // Vaciar el carrito tras confirmar la comanda
    this.cartService.clear();
  }

  /**
   * Opcional: Enviar copia por WhatsApp
   */
  checkoutWhatsApp(): void {
    const order = this.submittedOrder();
    let msg = '';

    if (order) {
      msg = `¡Hola Il Materello! Acabo de enviar la comanda *${order.id}* desde la *${order.table}*:\n\n`;
      order.lines.forEach((line) => {
        msg += `• ${line.quantity}x ${line.dish.name} ($${(line.dish.price * line.quantity).toLocaleString('es-AR')})\n`;
      });
      msg += `\n*Total: $${order.totalPrice.toLocaleString('es-AR')}*`;
    } else {
      const lines = this.lines();
      if (lines.length === 0) return;
      msg = `¡Hola Il Materello! Quiero pedir para la *${this.selectedTable()}*:\n\n`;
      lines.forEach((line) => {
        msg += `• ${line.quantity}x ${line.dish.name} ($${(line.dish.price * line.quantity).toLocaleString('es-AR')})\n`;
      });
      msg += `\n*Total: $${this.totalPrice().toLocaleString('es-AR')}*`;
    }

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  }
}
