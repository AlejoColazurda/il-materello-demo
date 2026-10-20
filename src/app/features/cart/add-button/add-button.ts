import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Dish } from '../../../core/models/dish.model';

/**
 * Botón "Agregar" que se convierte en un selector − N + cuando el plato ya está en el pedido.
 * - variant "wide": botón ancho con texto (vista Reels).
 * - variant "compact": botón circular "+" (vista Lista).
 */
@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.html',
  styleUrl: './add-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButton {
  private readonly cartService = inject(CartService);

  readonly dish = input.required<Dish>();
  readonly variant = input<'wide' | 'compact'>('wide');

  readonly quantity = computed(() => this.cartService.quantities().get(this.dish().id) ?? 0);

  add(event: Event): void {
    event.stopPropagation();
    this.cartService.add(this.dish().id);
  }

  remove(event: Event): void {
    event.stopPropagation();
    this.cartService.remove(this.dish().id);
  }
}
