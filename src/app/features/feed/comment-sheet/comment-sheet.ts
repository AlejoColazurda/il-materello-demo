import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

const SWIPE_CLOSE_THRESHOLD_PX = 80;
const CONTACT_KEY = 'ilm.commentContact';

export interface CommentSubmission {
  text: string;
  contact?: { name?: string; email?: string; whatsapp?: string };
}

function loadContact(): { name: string; email: string; whatsapp: string } {
  try {
    return { name: '', email: '', whatsapp: '', ...JSON.parse(localStorage.getItem(CONTACT_KEY) || '{}') };
  } catch {
    return { name: '', email: '', whatsapp: '' };
  }
}

/**
 * Comentario privado sobre un plato: le llega solo al restaurante (bandeja del panel)
 * y no se publica. Nombre, mail y WhatsApp son opcionales, por si quieren que les respondan.
 */
@Component({
  selector: 'app-comment-sheet',
  templateUrl: './comment-sheet.html',
  styleUrl: './comment-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentSheet {
  readonly dishName = input('');
  readonly closed = output<void>();
  readonly commentSubmitted = output<CommentSubmission>();

  private readonly saved = loadContact();
  readonly name = signal(this.saved.name);
  readonly email = signal(this.saved.email);
  readonly whatsapp = signal(this.saved.whatsapp);
  readonly draftText = signal('');
  readonly sent = signal(false);
  readonly triedSubmit = signal(false);
  readonly dragOffsetX = signal(0);

  // Los datos de contacto son opcionales: solo se valida el formato si los completan
  readonly emailOk = computed(
    () => !this.email().trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email().trim()),
  );
  readonly whatsappOk = computed(
    () => !this.whatsapp().trim() || this.whatsapp().replace(/\D/g, '').length >= 8,
  );
  readonly textOk = computed(() => this.draftText().trim().length >= 3);
  readonly canSend = computed(() => this.emailOk() && this.whatsappOk() && this.textOk());

  private dragStartX: number | null = null;

  submit(): void {
    this.triedSubmit.set(true);
    if (!this.canSend()) {
      return;
    }
    const contact = {
      name: this.name().trim(),
      email: this.email().trim(),
      whatsapp: this.whatsapp().trim(),
    };
    const hasContact = Boolean(contact.name || contact.email || contact.whatsapp);
    try {
      localStorage.setItem(CONTACT_KEY, JSON.stringify(contact));
    } catch {
      // sin storage: no se recuerdan los datos
    }
    this.commentSubmitted.emit({ text: this.draftText().trim(), contact: hasContact ? contact : undefined });
    this.draftText.set('');
    this.triedSubmit.set(false);
    this.sent.set(true);
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
