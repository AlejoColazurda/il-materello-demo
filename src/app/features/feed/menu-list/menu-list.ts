import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { Category } from '../../../core/models/category.model';
import { Dish } from '../../../core/models/dish.model';
import { AddButton } from '../../cart/add-button/add-button';
import { DishDetail } from '../dish-detail/dish-detail';
import { CUBIERTO_PRICE } from '../../../../assets/mock/dishes.mock';

interface MenuSection {
  category: Category;
  dishes: Dish[];
}

/** Alto del encabezado fijo (selector + chips) que tapa el comienzo de la lista. */
const HEADER_OFFSET = 104;

const normalize = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

/**
 * Carta en modo lista clásico: secciones por categoría, buscador y botón "+" por plato.
 * Tocar un plato abre su detalle; desde ahí se puede ver en Reels.
 */
@Component({
  selector: 'app-menu-list',
  imports: [CurrencyPipe, AddButton, DishDetail],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuList {
  private readonly menuService = inject(MenuService);

  readonly categories = input.required<Category[]>();
  readonly dishes = input.required<Dish[]>();
  readonly dishOpened = output<string>();

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');

  readonly cubiertoPrice = CUBIERTO_PRICE;
  readonly promo = this.menuService.promo;
  readonly promoDish = this.menuService.promoDish;
  readonly featuredDishes = this.menuService.featuredDishes;
  readonly query = signal('');
  /** Filtro rápido por etiqueta (Para compartir, Sin TACC, Para llevar…). */
  readonly activeTag = signal<string | null>(null);

  readonly availableTags = computed(() => {
    const counts = new Map<string, number>();
    for (const dish of this.dishes()) {
      for (const tag of dish.tags) {
        const clean = tag.trim();
        if (clean) counts.set(clean, (counts.get(clean) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([tag, count]) => ({ tag, count }));
  });
  readonly selectedDish = signal<Dish | null>(null);

  readonly selectedCategoryLabel = computed(
    () => this.categories().find((c) => c.id === this.selectedDish()?.categoryId)?.label ?? '',
  );
  private isAutoScrolling = false;
  private scrollFrame = 0;

  readonly sections = computed<MenuSection[]>(() => {
    const q = normalize(this.query().trim());
    const tag = this.activeTag();
    const dishes = this.dishes();

    return this.categories()
      .map((category) => ({
        category,
        dishes: dishes.filter(
          (dish) =>
            dish.categoryId === category.id &&
            (!q || normalize(`${dish.name} ${dish.description}`).includes(q)) &&
            (!tag || dish.tags.some((t) => t.trim() === tag)),
        ),
      }))
      .filter((section) => section.dishes.length > 0);
  });

  readonly resultCount = computed(() =>
    this.sections().reduce((total, section) => total + section.dishes.length, 0),
  );

  setQuery(value: string): void {
    this.query.set(value);
    this.scroller().nativeElement.scrollTo({ top: 0 });
  }

  clearQuery(): void {
    this.setQuery('');
    this.activeTag.set(null);
  }

  toggleTag(tag: string): void {
    this.activeTag.update((current) => (current === tag ? null : tag));
    this.scroller().nativeElement.scrollTo({ top: 0 });
  }

  scrollToCategory(categoryId: string): void {
    const container = this.scroller().nativeElement;
    const sections = container.querySelectorAll<HTMLElement>('[data-category]');
    const section = container.querySelector<HTMLElement>(`[data-category="${categoryId}"]`);
    if (!section) {
      return;
    }

    // La primera categoría vuelve arriba de todo para que se vea el buscador
    const top = section === sections[0] ? 0 : section.offsetTop - HEADER_OFFSET;
    this.isAutoScrolling = true;
    container.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => (this.isAutoScrolling = false), 700);
  }

  /** Marca como activa la categoría cuya sección está arriba de todo. */
  onScroll(): void {
    if (this.isAutoScrolling || this.scrollFrame) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = 0;
      const container = this.scroller().nativeElement;
      const sections = container.querySelectorAll<HTMLElement>('[data-category]');
      let current: string | undefined;

      for (const section of Array.from(sections)) {
        if (section.offsetTop - container.scrollTop <= HEADER_OFFSET + 40) {
          current = section.dataset['category'];
        }
      }

      current ??= sections[0]?.dataset['category'];
      if (current && current !== this.menuService.activeCategoryId()) {
        this.menuService.setActiveCategory(current);
      }
    });
  }

  openDetail(dish: Dish): void {
    this.selectedDish.set(dish);
  }

  closeDetail(): void {
    this.selectedDish.set(null);
  }

  openInReels(dishId: string): void {
    this.selectedDish.set(null);
    this.dishOpened.emit(dishId);
  }

  cleanTag(tag: string): string {
    return tag.trim();
  }
}
