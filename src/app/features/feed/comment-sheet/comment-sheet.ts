import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';

const SWIPE_CLOSE_THRESHOLD_PX = 80;

@Component({
  selector: 'app-comment-sheet',
  templateUrl: './comment-sheet.html',
  styleUrl: './comment-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentSheet {
  readonly comments = input.required<Comment[]>();
  readonly closed = output<void>();
  readonly commentSubmitted = output<string>();

  readonly draftText = signal('');
  readonly dragOffsetX = signal(0);

  private dragStartX: number | null = null;

  submit(): void {
    const text = this.draftText();
    if (!text.trim()) {
      return;
    }
    this.commentSubmitted.emit(text);
    this.draftText.set('');
  }

  onPointerDown(event: PointerEvent): void {
    this.dragStartX = event.clientX;
  }

  onPointerMove(event: PointerEvent): void {
    if (this.dragStartX === null) {
      return;
    }
    this.dragOffsetX.set(event.clientX - this.dragStartX);
  }

  onPointerUp(): void {
    if (Math.abs(this.dragOffsetX()) > SWIPE_CLOSE_THRESHOLD_PX) {
      this.closed.emit();
    }
    this.dragStartX = null;
    this.dragOffsetX.set(0);
  }
}
