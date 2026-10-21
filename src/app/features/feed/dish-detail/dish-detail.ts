import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { Dish } from '../../../core/models/dish.model';
import { AddButton } from '../../cart/add-button/add-button';

/** Detalle de un plato desde la lista: foto grande, precio, descripción y acceso al reel. */
@Component({
  selector: 'app-dish-detail',
  imports: [CurrencyPipe, AddButton],
  templateUrl: './dish-detail.html',
  styleUrl: './dish-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishDetail {
  readonly dish = input.required<Dish>();
  readonly categoryLabel = input('');
  readonly closed = output<void>();
  readonly openInReels = output<string>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }
}
