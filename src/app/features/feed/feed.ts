import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  output,
  viewChildren,
} from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { ProfileService } from '../../core/services/profile.service';
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
  private readonly profileService = inject(ProfileService);
  private readonly destroyRef = inject(DestroyRef);

  readonly openProfileRequested = output<void>();

  private readonly dishCardElements = viewChildren(DishCard, { read: ElementRef });

  readonly categories = this.menuService.categories;
  readonly dishes = this.menuService.dishes;
  readonly activeCategoryId = this.menuService.activeCategoryId;
  readonly userProfile = this.profileService.profile;

  private isAutoScrolling = false;

  constructor() {
    afterNextRender(() => {
      this.initScrollObserver();
    });
  }

  private initScrollObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (this.isAutoScrolling) {
          return;
        }

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const index = this.dishCardElements().findIndex(
              (card) => card.nativeElement === entry.target,
            );
            if (index !== -1) {
              const dish = this.dishes()[index];
              if (dish && dish.categoryId !== this.activeCategoryId()) {
                this.menuService.setActiveCategory(dish.categoryId);
              }
            }
          }
        }
      },
      {
        threshold: 0.55,
      },
    );

    this.dishCardElements().forEach((card) => {
      observer.observe(card.nativeElement);
    });

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }

  onCategorySelected(categoryId: string): void {
    this.menuService.setActiveCategory(categoryId);

    const targetDishId = this.menuService.firstDishIdByCategory(categoryId);
    const targetIndex = this.dishes().findIndex((dish) => dish.id === targetDishId);
    if (targetIndex === -1) {
      return;
    }

    this.isAutoScrolling = true;
    this.dishCardElements()[targetIndex]?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      this.isAutoScrolling = false;
    }, 700);
  }
}
