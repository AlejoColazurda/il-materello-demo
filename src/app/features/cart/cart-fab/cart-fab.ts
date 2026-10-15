import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-fab',
  templateUrl: './cart-fab.html',
  styleUrl: './cart-fab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartFab {
  private readonly cartService = inject(CartService);

  readonly itemCount = this.cartService.itemCount;

  open(): void {
    this.cartService.openDrawer();
  }
}
