import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order-drawer',
  imports: [CurrencyPipe],
  templateUrl: './order-drawer.html',
  styleUrl: './order-drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDrawer {
  private readonly cartService = inject(CartService);

  readonly isOpen = this.cartService.isDrawerOpen;
  readonly lines = this.cartService.lines;
  readonly totalPrice = this.cartService.totalPrice;

  close(): void {
    this.cartService.closeDrawer();
  }

  add(dishId: string): void {
    this.cartService.add(dishId);
  }

  remove(dishId: string): void {
    this.cartService.remove(dishId);
  }

  checkoutWhatsApp(): void {
    const lines = this.lines();
    if (lines.length === 0) {
      return;
    }

    let msg = '¡Hola Il Materello! 🍝 Me gustaría encargar este pedido desde la Carta Virtual:\n\n';
    lines.forEach((line) => {
      msg += `• ${line.quantity}x ${line.dish.name} ($${(line.dish.price * line.quantity).toLocaleString('es-AR')})\n`;
    });
    msg += `\n*Total estimado: $${this.totalPrice().toLocaleString('es-AR')}*\n`;
    msg += '\n¿Me confirman la demora y si están tomando pedidos? ¡Muchas gracias!';

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  }
}
