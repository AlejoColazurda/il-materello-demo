import { Injectable, computed, inject, signal } from '@angular/core';
import { CATEGORIES_MOCK, COMMENTS_MOCK, DISHES_MOCK } from '../../../assets/mock/dishes.mock';
import { Category } from '../models/category.model';
import { Comment } from '../models/comment.model';
import { Dish, Promo } from '../models/dish.model';
import { ProfileService } from './profile.service';

const OVERRIDES_KEY = 'ilm.dishOverrides';
const PROMO_KEY = 'ilm.promo';
const DEFAULT_FEATURED = ['tricolor-con-burrata', 'lasagna-a-la-bolognesa', 'fazzoletti-de-salmon', 'tiramisu'];
const DEFAULT_PROMO: Promo = {
  active: true,
  badge: 'Sugerencia del chef',
  title: 'Tricolor con burrata',
  subtitle: 'Burrata, prosciutto italiano y rúcula. Ideal para compartir.',
  dishId: 'tricolor-con-burrata',
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // sin storage disponible
  }
}

/** Carta inicial + cambios hechos desde el panel (guardados en este navegador hasta tener backend). */
function initialDishes(): Dish[] {
  const overrides = readJson<Record<string, Partial<Dish>>>(OVERRIDES_KEY, {});
  return DISHES_MOCK.map((dish) => ({
    ...dish,
    featured: DEFAULT_FEATURED.includes(dish.id),
    ...overrides[dish.id],
  }));
}

/**
 * Store de catálogo basado en Signals. El mock hoy vive en memoria;
 * cuando haya backend, solo cambia de dónde se cargan estos signals iniciales.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly profileService = inject(ProfileService);

  private readonly dishesSignal = signal<Dish[]>(initialDishes());
  private readonly promoSignal = signal<Promo>(readJson<Promo>(PROMO_KEY, DEFAULT_PROMO));
  private readonly commentsSignal = signal<Comment[]>(COMMENTS_MOCK);
  private readonly likedDishIdsSignal = signal<ReadonlySet<string>>(new Set(['sorrentinos-osobuco']));
  private readonly openCommentSheetIdSignal = signal<string | null>(null);
  private readonly activeCategoryIdSignal = signal<string>(CATEGORIES_MOCK[0].id);

  readonly categories = computed<Category[]>(() => CATEGORIES_MOCK);
  readonly dishes = computed(() => this.dishesSignal());
  readonly activeCategoryId = this.activeCategoryIdSignal.asReadonly();
  readonly openCommentSheetId = this.openCommentSheetIdSignal.asReadonly();
  readonly promo = this.promoSignal.asReadonly();
  readonly featuredDishes = computed(() => this.dishesSignal().filter((d) => d.featured));
  readonly promoDish = computed(() => this.dishesSignal().find((d) => d.id === this.promoSignal().dishId));

  setActiveCategory(categoryId: string): void {
    this.activeCategoryIdSignal.set(categoryId);
  }

  isLiked(dishId: string): boolean {
    return this.likedDishIdsSignal().has(dishId);
  }

  toggleLike(dishId: string): void {
    const current = new Set(this.likedDishIdsSignal());
    const wasLiked = current.has(dishId);
    wasLiked ? current.delete(dishId) : current.add(dishId);
    this.likedDishIdsSignal.set(current);

    this.dishesSignal.update((dishes) =>
      dishes.map((dish) =>
        dish.id === dishId ? { ...dish, likes: dish.likes + (wasLiked ? -1 : 1) } : dish,
      ),
    );
  }

  commentsFor(dishId: string): Comment[] {
    return this.commentsSignal().filter((comment) => comment.dishId === dishId);
  }

  commentCountFor(dishId: string): number {
    return this.commentsSignal().filter((comment) => comment.dishId === dishId).length;
  }

  addComment(dishId: string, text: string): void {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    const profile = this.profileService.profile();
    this.commentsSignal.update((comments) => [
      ...comments,
      {
        id: `local-${Date.now()}`,
        dishId,
        author: `@${profile.nickname}`,
        text: trimmed,
        avatar: profile.avatar || undefined,
        timeAgo: 'ahora',
        likes: 0,
      },
    ]);
  }

  toggleCommentSheet(dishId: string): void {
    this.openCommentSheetIdSignal.update((current) => (current === dishId ? null : dishId));
  }

  closeCommentSheet(): void {
    this.openCommentSheetIdSignal.set(null);
  }

  firstDishIdByCategory(categoryId: string): string | undefined {
    return this.dishesSignal().find((dish) => dish.categoryId === categoryId)?.id;
  }

  toggleDishStock(dishId: string): void {
    const dish = this.dishesSignal().find((d) => d.id === dishId);
    if (dish) {
      this.updateDish(dishId, { inStock: !dish.inStock });
    }
  }

  addDish(newDishData: Omit<Dish, 'id' | 'likes' | 'shares'>): Dish {
    const slug = newDishData.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-');
    const id = `${slug}-${Date.now().toString().slice(-4)}`;

    const newDish: Dish = {
      ...newDishData,
      id,
      likes: 0,
      shares: 0,
      bgGradient: newDishData.bgGradient || 'linear-gradient(160deg,#2a1f1a,#140e0a 70%)',
    };

    this.dishesSignal.update((dishes) => [newDish, ...dishes]);
    return newDish;
  }

  updateDish(dishId: string, updates: Partial<Dish>): void {
    this.dishesSignal.update((dishes) =>
      dishes.map((d) => (d.id === dishId ? { ...d, ...updates } : d)),
    );
    this.persistOverride(dishId, updates);
  }

  toggleFeatured(dishId: string): void {
    const dish = this.dishesSignal().find((d) => d.id === dishId);
    if (dish) {
      this.updateDish(dishId, { featured: !dish.featured });
    }
  }

  setPromo(promo: Promo): void {
    this.promoSignal.set(promo);
    writeJson(PROMO_KEY, promo);
  }

  /** Guarda los cambios del panel (las fotos subidas no: pesan demasiado para el navegador). */
  private persistOverride(dishId: string, updates: Partial<Dish>): void {
    const { imageUrl, ...rest } = updates;
    const toSave: Partial<Dish> = { ...rest };
    if (imageUrl && !imageUrl.startsWith('data:')) {
      toSave.imageUrl = imageUrl;
    }
    if (!Object.keys(toSave).length) {
      return;
    }
    const overrides = readJson<Record<string, Partial<Dish>>>(OVERRIDES_KEY, {});
    overrides[dishId] = { ...overrides[dishId], ...toSave };
    writeJson(OVERRIDES_KEY, overrides);
  }

  /** Reemplaza la foto de un plato por una propia (deja de ser ilustrativa). */
  replaceDishPhoto(dishId: string, imageUrl: string): void {
    this.updateDish(dishId, { imageUrl, photoIsPlaceholder: false });
  }

  deleteDish(dishId: string): void {
    this.dishesSignal.update((dishes) => dishes.filter((d) => d.id !== dishId));
  }
}

