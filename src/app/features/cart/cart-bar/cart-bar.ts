import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

/**
 * Barra fija inferior "Ver comanda" (solo personal). Aparece cuando hay algo cargado
 * y "rebota" cada vez que se agrega un plato, sin tapar los botones de la carta.
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

  readonly canTakeOrders = inject(AuthService).canTakeOrders;
  readonly itemCount = this.cartService.itemCount;
  readonly totalPrice = this.cartService.totalPrice;
  readonly bump = signal(false);

  private bumpTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly mountedAt = Date.now();

  constructor() {
    effect(() => {
      const last = this.cartService.lastAdded();
      // Ignorar agregados anteriores a que se montara la barra
      if (!last || last.at < this.mountedAt) {
        return;
      }
      // Reiniciar la animación aunque se agreguen platos seguidos
      this.bump.set(false);
      clearTimeout(this.bumpTimer);
      requestAnimationFrame(() => this.bump.set(true));
      this.bumpTimer = setTimeout(() => this.bump.set(false), 450);
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.bumpTimer));
  }

  open(): void {
    this.cartService.openDrawer();
  }
}
