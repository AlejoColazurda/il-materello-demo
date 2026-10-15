import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { MenuService } from '../../../core/services/menu.service';
import { Dish } from '../../../core/models/dish.model';
import { ActionRail } from '../action-rail/action-rail';
import { CartFab } from '../../cart/cart-fab/cart-fab';
import { CommentSheet } from '../comment-sheet/comment-sheet';

@Component({
  selector: 'app-dish-card',
  imports: [CurrencyPipe, ActionRail, CartFab, CommentSheet],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishCard {
  private readonly menuService = inject(MenuService);
  private readonly cartService = inject(CartService);

  readonly dish = input.required<Dish>();
  readonly dotIndex = input(0);

  readonly dotIndices = [0, 1, 2, 3];

  private readonly shareFeedback = signal<string | null>(null);

  get shareLabel(): string {
    return this.shareFeedback() ?? 'Compartir';
  }

  get isLiked(): boolean {
    return this.menuService.isLiked(this.dish().id);
  }

  get commentCount(): number {
    return this.menuService.commentCountFor(this.dish().id);
  }

  get comments() {
    return this.menuService.commentsFor(this.dish().id);
  }

  get commentsOpen(): boolean {
    return this.menuService.openCommentSheetId() === this.dish().id;
  }

  toggleLike(): void {
    this.menuService.toggleLike(this.dish().id);
  }

  toggleComments(): void {
    this.menuService.toggleCommentSheet(this.dish().id);
  }

  closeComments(): void {
    this.menuService.closeCommentSheet();
  }

  submitComment(text: string): void {
    this.menuService.addComment(this.dish().id, text);
  }

  addToCart(): void {
    this.cartService.add(this.dish().id);
  }

  async shareDish(): Promise<void> {
    const dish = this.dish();
    const shareData = {
      title: dish.name,
      text: `${dish.name} — Il Materello, Carta Virtual`,
      url: `${location.origin}${location.pathname}#${dish.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      this.shareFeedback.set('¡Copiado!');
    } catch {
      this.shareFeedback.set('No disponible');
    }
    setTimeout(() => this.shareFeedback.set(null), 2000);
  }
}
