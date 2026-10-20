import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

/**
 * Barra fija inferior "Ver mi pedido" + aviso breve cada vez que se agrega un plato.
 * Solo aparece cuando hay algo en el pedido.
 */
@Component({
  selector: 'app-cart-bar',
  imports: [CurrencyPipe],
  templateUrl: './cart-bar.html',
  styleUrl: './cart-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartBar {
  private readonly cartService = inject(CartService);

  readonly itemCount = this.cartService.itemCount;
  readonly totalPrice = this.cartService.totalPrice;
  readonly toastText = signal<string | null>(null);

  private toastTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly mountedAt = Date.now();

  constructor() {
    effect(() => {
      const last = this.cartService.lastAdded();
      // Ignorar agregados anteriores a que se montara la barra
      if (!last || last.at < this.mountedAt) {
        return;
      }
      this.toastText.set(last.dish.name);
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => this.toastText.set(null), 1800);
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.toastTimer));
  }

  open(): void {
    this.cartService.openDrawer();
  }
}
