import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { InboxService } from '../../../core/services/inbox.service';
import { GOOGLE_REVIEW_URL } from '../../../core/config/reviews';

interface Mood {
  value: number;
  emoji: string;
  label: string;
  color: string;
}

/**
 * "¿Cómo la estás pasando?" con caritas.
 * Muy bien / Excelente → invitación a dejar la reseña en Google.
 * Mal / Regular / Bien → mensaje privado al encargado (sin enlace a Google).
 *
 * Decisión de la clienta (21/10/2026), tomada sabiendo que las políticas de reseñas de
 * Google prohíben pedir reseñas solo a clientes satisfechos ("review gating") y que
 * Google puede quitar reseñas o penalizar la ficha si lo detecta.
 */
@Component({
  selector: 'app-review-prompt',
  templateUrl: './review-prompt.html',
  styleUrl: './review-prompt.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewPrompt {
  private readonly inboxService = inject(InboxService);

  readonly closed = output<void>();

  readonly moods: Mood[] = [
    { value: 1, emoji: '😡', label: 'Mal', color: '#e74c3c' },
    { value: 2, emoji: '😕', label: 'Regular', color: '#e67e22' },
    { value: 3, emoji: '😐', label: 'Bien', color: '#f1c40f' },
    { value: 4, emoji: '🙂', label: 'Muy bien', color: '#7bd148' },
    { value: 5, emoji: '😍', label: '¡Excelente!', color: '#2ecc71' },
  ];

  readonly googleUrl = GOOGLE_REVIEW_URL;
  readonly selected = signal<Mood | null>(null);
  readonly feedback = signal('');
  readonly feedbackSent = signal(false);

  readonly isHappy = computed(() => (this.selected()?.value ?? 0) >= 4);

  select(mood: Mood): void {
    this.selected.set(mood);
  }

  sendFeedback(): void {
    const text = this.feedback().trim();
    if (!text) {
      return;
    }
    this.inboxService.add({ kind: 'experiencia', mood: this.selected()?.value, text });
    this.feedbackSent.set(true);
  }

  openGoogle(): void {
    window.open(this.googleUrl, '_blank', 'noopener');
    this.closed.emit();
  }
}
