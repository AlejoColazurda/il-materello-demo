import { Injectable, computed, signal } from '@angular/core';

export type InboxKind = 'comentario' | 'experiencia';

export interface InboxMessage {
  id: string;
  kind: InboxKind;
  text: string;
  /** Plato sobre el que comentan (si el mensaje viene de un plato). */
  dishId?: string;
  dishName?: string;
  /** Carita elegida en la valoración (1 a 5), si el mensaje viene de ahí. */
  mood?: number;
  /** Datos de contacto opcionales, si el comensal quiere que le respondan. */
  contact?: { name?: string; email?: string; whatsapp?: string };
  at: string;
  read: boolean;
}

const INBOX_KEY = 'ilm.inbox';

function load(): InboxMessage[] {
  try {
    return JSON.parse(localStorage.getItem(INBOX_KEY) || '[]');
  } catch {
    return [];
  }
}

/**
 * Bandeja de entrada privada del restaurante: comentarios sobre platos y mensajes de la
 * valoración. Los comensales no ven lo que escriben otros; solo el administrador.
 * Sin backend queda guardada en este navegador; con servidor, le llega al panel en cualquier dispositivo.
 */
@Injectable({ providedIn: 'root' })
export class InboxService {
  private readonly messagesSignal = signal<InboxMessage[]>(load());

  readonly messages = computed(() =>
    [...this.messagesSignal()].sort((a, b) => b.at.localeCompare(a.at)),
  );
  readonly unreadCount = computed(() => this.messagesSignal().filter((m) => !m.read).length);

  add(message: Omit<InboxMessage, 'id' | 'at' | 'read'>): void {
    const text = message.text.trim();
    if (!text) {
      return;
    }
    this.update((list) => [
      ...list,
      { ...message, text, id: `msg-${Date.now()}`, at: new Date().toISOString(), read: false },
    ]);
  }

  markRead(id: string, read = true): void {
    this.update((list) => list.map((m) => (m.id === id ? { ...m, read } : m)));
  }

  markAllRead(): void {
    this.update((list) => list.map((m) => ({ ...m, read: true })));
  }

  remove(id: string): void {
    this.update((list) => list.filter((m) => m.id !== id));
  }

  private update(fn: (list: InboxMessage[]) => InboxMessage[]): void {
    this.messagesSignal.update(fn);
    try {
      localStorage.setItem(INBOX_KEY, JSON.stringify(this.messagesSignal()));
    } catch {
      // sin storage
    }
  }
}
