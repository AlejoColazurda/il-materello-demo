import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { Dish } from '../../../core/models/dish.model';
import { ActionRail } from '../action-rail/action-rail';
import { AddButton } from '../../cart/add-button/add-button';
import { CommentSheet } from '../comment-sheet/comment-sheet';

@Component({
  selector: 'app-dish-card',
  imports: [CurrencyPipe, ActionRail, AddButton, CommentSheet],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishCard {
  private readonly menuService = inject(MenuService);

  readonly dish = input.required<Dish>();
  readonly heartBurstActive = signal(false);
  readonly shareModalOpen = signal(false);
  readonly copyFeedback = signal<string | null>(null);

  private lastTap = 0;

  get category() {
    return this.menuService.categories().find((c) => c.id === this.dish().categoryId);
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

  get hasNativeShare(): boolean {
    return typeof navigator !== 'undefined' && !!navigator.share;
  }

  get shareLabel(): string {
    return `${this.dish().shares ?? 24}`;
  }

  /**
   * Doble tap estilo Instagram Reels para dar like con animación en el centro
   */
  onCardClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Si el clic fue en un botón, input o enlace, ignorar para no interferir con clicks normales
    if (target.closest('button, input, a, .comment-sheet, .share-sheet')) {
      return;
    }

    const now = Date.now();
    const delay = now - this.lastTap;

    if (delay < 320 && delay > 40) {
      // Doble tap detectado
      this.triggerHeartBurst();
      if (!this.isLiked) {
        this.menuService.toggleLike(this.dish().id);
      }
      this.lastTap = 0;
    } else {
      this.lastTap = now;
    }
  }

  private triggerHeartBurst(): void {
    this.heartBurstActive.set(true);
    setTimeout(() => {
      this.heartBurstActive.set(false);
    }, 850);
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

  openShareModal(): void {
    this.shareModalOpen.set(true);
  }

  closeShareModal(): void {
    this.shareModalOpen.set(false);
  }

  shareViaWhatsApp(): void {
    const dish = this.dish();
    const url = `${window.location.origin}${window.location.pathname}#${dish.id}`;
    const text = `¡Mirá este plato de Il Matterello!\n*${dish.name}* - $${dish.price.toLocaleString('es-AR')}\n"${dish.description}"\n\nPodés verlo acá: ${url}`;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    this.closeShareModal();
  }

  async copyShareLink(): Promise<void> {
    const dish = this.dish();
    const url = `${window.location.origin}${window.location.pathname}#${dish.id}`;
    const text = `${dish.name} — Il Matterello, Carta Virtual: ${url}`;

    try {
      await navigator.clipboard.writeText(text);
      this.copyFeedback.set('¡Copiado!');
    } catch {
      this.copyFeedback.set('Copiado');
    }

    setTimeout(() => {
      this.copyFeedback.set(null);
      this.closeShareModal();
    }, 1200);
  }

  async shareViaNative(): Promise<void> {
    const dish = this.dish();
    const shareData = {
      title: `${dish.name} — Il Matterello`,
      text: `${dish.name}: ${dish.description}`,
      url: `${window.location.origin}${window.location.pathname}#${dish.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        this.closeShareModal();
      } catch {
        // Usuario canceló compartir
      }
    }
  }
}
