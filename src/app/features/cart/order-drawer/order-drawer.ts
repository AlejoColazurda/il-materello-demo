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
}
