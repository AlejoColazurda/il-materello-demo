import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { GOOGLE_REVIEW_URL } from '../../../core/config/reviews';

interface Mood {
  value: number;
  emoji: string;
  label: string;
  color: string;
}

const FEEDBACK_KEY = 'ilm.privateFeedback';

/**
 * "¿Cómo la estás pasando?" con caritas.
 * A TODOS se les ofrece dejar la reseña en Google (pedir reseñas solo a los contentos va
 * contra las políticas de Google). A quien no la está pasando bien se le ofrece además,
 * primero, contarle al encargado en privado para resolverlo en el momento.
 */
@Component({
  selector: 'app-review-prompt',
  templateUrl: './review-prompt.html',
  styleUrl: './review-prompt.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewPrompt {
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
    // Sin backend: queda guardado en el dispositivo. Con servidor, esto le llega al encargado.
    try {
      const list = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
      list.push({ mood: this.selected()?.value, text, at: new Date().toISOString() });
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
    } catch {
      // sin storage
    }
    this.feedbackSent.set(true);
  }

  openGoogle(): void {
    window.open(this.googleUrl, '_blank', 'noopener');
    this.closed.emit();
  }
}
