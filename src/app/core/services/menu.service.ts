import { Injectable, computed, inject, signal } from '@angular/core';
import { CATEGORIES_MOCK, COMMENTS_MOCK, DISHES_MOCK } from '../../../assets/mock/dishes.mock';
import { Category } from '../models/category.model';
import { Comment } from '../models/comment.model';
import { Dish } from '../models/dish.model';
import { ProfileService } from './profile.service';

/**
 * Store de catálogo basado en Signals. El mock hoy vive en memoria;
 * cuando haya backend, solo cambia de dónde se cargan estos signals iniciales.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly profileService = inject(ProfileService);

  private readonly dishesSignal = signal<Dish[]>(DISHES_MOCK);
  private readonly commentsSignal = signal<Comment[]>(COMMENTS_MOCK);
  private readonly likedDishIdsSignal = signal<ReadonlySet<string>>(new Set(['sorrentinos-osobuco']));
  private readonly openCommentSheetIdSignal = signal<string | null>(null);
  private readonly activeCategoryIdSignal = signal<string>(CATEGORIES_MOCK[0].id);

  readonly categories = computed<Category[]>(() => CATEGORIES_MOCK);
  readonly dishes = computed(() => this.dishesSignal());
  readonly activeCategoryId = this.activeCategoryIdSignal.asReadonly();
  readonly openCommentSheetId = this.openCommentSheetIdSignal.asReadonly();

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
    this.dishesSignal.update((dishes) =>
      dishes.map((d) => (d.id === dishId ? { ...d, inStock: !d.inStock } : d)),
    );
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
  }

  deleteDish(dishId: string): void {
    this.dishesSignal.update((dishes) => dishes.filter((d) => d.id !== dishId));
  }
}

