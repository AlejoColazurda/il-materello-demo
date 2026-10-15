import { Dish } from './dish.model';

export type OrderStatus = 'pendiente' | 'preparando' | 'entregado' | 'cobrado' | 'cancelado';

export interface OrderLine {
  dish: Dish;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string; // Ej: CMD-101
  table: string; // Ej: Mesa 4
  customerName?: string;
  lines: OrderLine[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt?: Date;
  paymentMethod?: 'efectivo' | 'tarjeta' | 'mercadopago';
  fudoSynced?: boolean;
}
