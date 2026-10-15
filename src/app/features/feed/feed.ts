import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChildren } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { CategoryChipBar } from './category-chip-bar/category-chip-bar';
import { DishCard } from './dish-card/dish-card';
import { OrderDrawer } from '../cart/order-drawer/order-drawer';

@Component({
  selector: 'app-feed',
  imports: [CategoryChipBar, DishCard, OrderDrawer],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  private readonly menuService = inject(MenuService);

  private readonly dishCardElements = viewChildren(DishCard, { read: ElementRef });

  readonly categories = this.menuService.categories;
  readonly dishes = this.menuService.dishes;
  readonly activeCategoryId = this.menuService.activeCategoryId;

  onCategorySelected(categoryId: string): void {
    this.menuService.setActiveCategory(categoryId);

    const targetDishId = this.menuService.firstDishIdByCategory(categoryId);
    const targetIndex = this.dishes().findIndex((dish) => dish.id === targetDishId);
    if (targetIndex === -1) {
      return;
    }

    this.dishCardElements()[targetIndex]?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
