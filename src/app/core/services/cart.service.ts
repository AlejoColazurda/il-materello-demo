import { Injectable, computed, signal } from '@angular/core';
import { DISHES_MOCK } from '../../../assets/mock/dishes.mock';
import { Dish } from '../models/dish.model';

export interface CartLine {
  dish: Dish;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly quantitiesSignal = signal<ReadonlyMap<string, number>>(
    new Map([['pizza-napoletana', 1], ['tiramisu', 1]]),
  );
  private readonly drawerOpenSignal = signal(false);

  readonly isDrawerOpen = this.drawerOpenSignal.asReadonly();

  readonly lines = computed<CartLine[]>(() => {
    const quantities = this.quantitiesSignal();
    return DISHES_MOCK.filter((dish) => (quantities.get(dish.id) ?? 0) > 0).map((dish) => ({
      dish,
      quantity: quantities.get(dish.id) ?? 0,
    }));
  });

  readonly itemCount = computed(() =>
    [...this.quantitiesSignal().values()].reduce((total, quantity) => total + quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.lines().reduce((total, line) => total + line.dish.price * line.quantity, 0),
  );

  add(dishId: string): void {
    const current = new Map(this.quantitiesSignal());
    current.set(dishId, (current.get(dishId) ?? 0) + 1);
    this.quantitiesSignal.set(current);
  }

  remove(dishId: string): void {
    const current = new Map(this.quantitiesSignal());
    const quantity = current.get(dishId) ?? 0;
    if (quantity <= 1) {
      current.delete(dishId);
    } else {
      current.set(dishId, quantity - 1);
    }
    this.quantitiesSignal.set(current);
  }

  openDrawer(): void {
    this.drawerOpenSignal.set(true);
  }

  closeDrawer(): void {
    this.drawerOpenSignal.set(false);
  }
}
