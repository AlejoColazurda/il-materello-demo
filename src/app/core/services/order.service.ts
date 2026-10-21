import { Injectable, computed, signal } from '@angular/core';
import { Order, OrderStatus } from '../models/order.model';
import { CartLine } from './cart.service';
import { DISHES_MOCK } from '../../../assets/mock/dishes.mock';

const dishById = (id: string) => DISHES_MOCK.find((dish) => dish.id === id)!;

/** Calcula el total a partir de las líneas, así nunca queda desfasado de los platos. */
function seedOrder(order: Omit<Order, 'totalPrice'>): Order {
  const totalPrice = order.lines.reduce((sum, line) => sum + line.dish.price * line.quantity, 0);
  return { ...order, totalPrice };
}

const INITIAL_ORDERS_MOCK: Order[] = [
  seedOrder({
    id: 'CMD-101',
    table: 'Mesa 4',
    customerName: 'Santiago & Familia',
    waiterName: 'Mateo Salón',
    lines: [
      { dish: dishById('pappardelle'), quantity: 2, notes: 'Bien caliente por favor' },
      { dish: dishById('olivia-malbec'), quantity: 1 },
    ],
    status: 'preparando',
    createdAt: new Date(Date.now() - 12 * 60 * 1000), // hace 12 min
  }),
  seedOrder({
    id: 'CMD-102',
    table: 'Mesa 2',
    customerName: 'Micaela',
    waiterName: 'Mateo Salón',
    lines: [
      { dish: dishById('vitel-tone'), quantity: 1, notes: 'Salsa aparte' },
      { dish: dishById('ravioles-genoveses'), quantity: 1 },
      { dish: dishById('limonada-casera'), quantity: 1 },
    ],
    status: 'pendiente',
    createdAt: new Date(Date.now() - 3 * 60 * 1000), // hace 3 min
  }),
  seedOrder({
    id: 'CMD-103',
    table: 'Mesa 7',
    customerName: 'Martín G.',
    waiterName: 'Lucía Pérez',
    lines: [
      { dish: dishById('lasagna-a-la-bolognesa'), quantity: 1 },
      { dish: dishById('tiramisu'), quantity: 1 },
    ],
    status: 'entregado',
    createdAt: new Date(Date.now() - 35 * 60 * 1000), // hace 35 min
  }),
];

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly ordersSignal = signal<Order[]>(INITIAL_ORDERS_MOCK);
  private nextTicketNumber = 104;

  readonly orders = computed(() => this.ordersSignal());

  readonly pendingOrdersCount = computed(
    () => this.ordersSignal().filter((o) => o.status === 'pendiente').length,
  );

  readonly preparingOrdersCount = computed(
    () => this.ordersSignal().filter((o) => o.status === 'preparando').length,
  );

  readonly activeOrdersCount = computed(
    () => this.ordersSignal().filter((o) => o.status === 'pendiente' || o.status === 'preparando').length,
  );

  createOrder(
    table: string,
    lines: CartLine[],
    customerName?: string,
    notes?: string,
    waiterName?: string,
  ): Order {
    const orderLines = lines.map((l) => ({
      dish: l.dish,
      quantity: l.quantity,
      notes,
    }));

    const totalPrice = lines.reduce((sum, l) => sum + l.dish.price * l.quantity, 0);

    const newOrder: Order = {
      id: `CMD-${this.nextTicketNumber++}`,
      table: table || 'Mesa 1',
      customerName,
      waiterName,
      lines: orderLines,
      totalPrice,
      status: 'pendiente',
      createdAt: new Date(),
    };

    this.ordersSignal.update((orders) => [newOrder, ...orders]);
    this.playNotificationSound();

    return newOrder;
  }

  updateOrderStatus(orderId: string, status: OrderStatus): void {
    this.ordersSignal.update((orders) =>
      orders.map((o) => (o.id === orderId ? { ...o, status, updatedAt: new Date() } : o)),
    );
  }

  deleteOrder(orderId: string): void {
    this.ordersSignal.update((orders) => orders.filter((o) => o.id !== orderId));
  }

  private playNotificationSound(): void {
    try {
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // Audio autoplay restrictions
    }
  }
}
