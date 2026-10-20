import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  output,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { ProfileService } from '../../core/services/profile.service';
import { CategoryChipBar } from './category-chip-bar/category-chip-bar';
import { DishCard } from './dish-card/dish-card';
import { MenuList } from './menu-list/menu-list';
import { OrderDrawer } from '../cart/order-drawer/order-drawer';
import { CartBar } from '../cart/cart-bar/cart-bar';

export type MenuViewMode = 'reels' | 'lista';

const VIEW_MODE_KEY = 'ilm.menuViewMode';
const SWIPE_HINT_KEY = 'ilm.swipeHintSeen';

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Sin storage disponible (modo privado): no pasa nada, solo no se recuerda
  }
}

@Component({
  selector: 'app-feed',
  imports: [CategoryChipBar, DishCard, MenuList, OrderDrawer, CartBar],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  private readonly menuService = inject(MenuService);
  private readonly profileService = inject(ProfileService);
  private readonly destroyRef = inject(DestroyRef);

  readonly openProfileRequested = output<void>();

  private readonly feedElement = viewChild.required<ElementRef<HTMLElement>>('feed');
  private readonly dishCardElements = viewChildren(DishCard, { read: ElementRef });
  private readonly menuList = viewChild(MenuList);

  readonly categories = this.menuService.categories;
  readonly dishes = this.menuService.dishes;
  readonly activeCategoryId = this.menuService.activeCategoryId;
  readonly userProfile = this.profileService.profile;
  readonly commentsOpen = computed(() => this.menuService.openCommentSheetId() !== null);

  readonly viewMode = signal<MenuViewMode>(
    readStorage(VIEW_MODE_KEY) === 'lista' ? 'lista' : 'reels',
  );
  readonly showSwipeHint = signal(readStorage(SWIPE_HINT_KEY) !== '1');

  private isAutoScrolling = false;
  private observer: IntersectionObserver | undefined;
  private readonly observedCards = new WeakSet<Element>();

  constructor() {
    afterNextRender(() => {
      this.initScrollObserver();
    });

    // Observar también las tarjetas que se agregan después (ej. un reel nuevo)
    effect(() => {
      const cards = this.dishCardElements();
      if (!this.observer) {
        return;
      }
      for (const card of cards) {
        if (!this.observedCards.has(card.nativeElement)) {
          this.observer.observe(card.nativeElement);
          this.observedCards.add(card.nativeElement);
        }
      }
    });
  }

  private initScrollObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
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
      this.observer!.observe(card.nativeElement);
      this.observedCards.add(card.nativeElement);
    });

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
    });
  }

  setViewMode(mode: MenuViewMode): void {
    if (mode === this.viewMode()) {
      return;
    }
    this.menuService.closeCommentSheet();
    this.viewMode.set(mode);
    writeStorage(VIEW_MODE_KEY, mode);

    // Mantener la categoría en la que estaba el comensal al cambiar de vista
    const categoryId = this.activeCategoryId();
    requestAnimationFrame(() => this.scrollToCategory(categoryId, false));
  }

  /** Desde la lista: abrir un plato en grande en la vista Reels. */
  openDishInReels(dishId: string): void {
    this.viewMode.set('reels');
    writeStorage(VIEW_MODE_KEY, 'reels');

    const index = this.dishes().findIndex((dish) => dish.id === dishId);
    const dish = this.dishes()[index];
    if (dish) {
      this.menuService.setActiveCategory(dish.categoryId);
    }

    requestAnimationFrame(() => this.scrollReelsTo(index, false));
  }

  onFeedScroll(): void {
    if (this.showSwipeHint() && this.feedElement().nativeElement.scrollTop > 40) {
      this.dismissSwipeHint();
    }
  }

  dismissSwipeHint(): void {
    this.showSwipeHint.set(false);
    writeStorage(SWIPE_HINT_KEY, '1');
  }

  onCategorySelected(categoryId: string): void {
    this.menuService.setActiveCategory(categoryId);
    this.scrollToCategory(categoryId, true);
  }

  private scrollToCategory(categoryId: string, smooth: boolean): void {
    if (this.viewMode() === 'lista') {
      this.menuList()?.scrollToCategory(categoryId);
      return;
    }

    const targetDishId = this.menuService.firstDishIdByCategory(categoryId);
    const targetIndex = this.dishes().findIndex((dish) => dish.id === targetDishId);
    this.scrollReelsTo(targetIndex, smooth);
  }

  private scrollReelsTo(index: number, smooth: boolean): void {
    const card = this.dishCardElements()[index]?.nativeElement as HTMLElement | undefined;
    if (!card) {
      return;
    }

    this.isAutoScrolling = true;
    this.feedElement().nativeElement.scrollTo({
      top: card.offsetTop,
      behavior: smooth ? 'smooth' : 'instant',
    });

    setTimeout(() => {
      this.isAutoScrolling = false;
    }, smooth ? 700 : 50);
  }
}
