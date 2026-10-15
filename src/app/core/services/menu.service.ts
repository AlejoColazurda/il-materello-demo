import { Injectable, computed, signal } from '@angular/core';
import { CATEGORIES_MOCK, COMMENTS_MOCK, DISHES_MOCK } from '../../../assets/mock/dishes.mock';
import { Category } from '../models/category.model';
import { Comment } from '../models/comment.model';
import { Dish } from '../models/dish.model';

/**
 * Store de catálogo basado en Signals. El mock hoy vive en memoria;
 * cuando haya backend, solo cambia de dónde se cargan estos signals iniciales.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
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
    this.commentsSignal.update((comments) => [
      ...comments,
      {
        id: `local-${Date.now()}`,
        dishId,
        author: 'vos',
        text: trimmed,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
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
}
