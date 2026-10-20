import { Injectable, computed, inject, signal } from '@angular/core';
import { Dish } from '../models/dish.model';
import { MenuService } from './menu.service';

export interface CartLine {
  dish: Dish;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly menuService = inject(MenuService);

  private readonly quantitiesSignal = signal<ReadonlyMap<string, number>>(
    new Map(),
  );
  private readonly drawerOpenSignal = signal(false);
  private readonly lastAddedSignal = signal<{ dish: Dish; at: number } | null>(null);

  readonly isDrawerOpen = this.drawerOpenSignal.asReadonly();
  readonly quantities = this.quantitiesSignal.asReadonly();
  /** Último plato agregado (para mostrar el toast de confirmación). */
  readonly lastAdded = this.lastAddedSignal.asReadonly();

  readonly lines = computed<CartLine[]>(() => {
    const quantities = this.quantitiesSignal();
    return this.menuService
      .dishes()
      .filter((dish) => (quantities.get(dish.id) ?? 0) > 0)
      .map((dish) => ({
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

  quantityOf(dishId: string): number {
    return this.quantitiesSignal().get(dishId) ?? 0;
  }

  add(dishId: string): void {
    const current = new Map(this.quantitiesSignal());
    current.set(dishId, (current.get(dishId) ?? 0) + 1);
    this.quantitiesSignal.set(current);

    const dish = this.menuService.dishes().find((d) => d.id === dishId);
    if (dish) {
      this.lastAddedSignal.set({ dish, at: Date.now() });
    }
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

  clear(): void {
    this.quantitiesSignal.set(new Map());
  }

  openDrawer(): void {
    this.drawerOpenSignal.set(true);
  }

  closeDrawer(): void {
    this.drawerOpenSignal.set(false);
  }
}
