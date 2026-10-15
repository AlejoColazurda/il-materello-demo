export type Role = 'admin' | 'mozo' | 'cocina' | 'cliente';

export interface Permissions {
  canEditDishes: boolean;
  canEditPrices: boolean;
  canToggleStock: boolean;
  canManageUsers: boolean;
  canViewWaitersPanel: boolean;
  canViewKitchenKDS: boolean;
  canManageOrders: boolean;
  canConfigurePOS: boolean;
}

export const ROLE_PERMISSIONS: Record<Role, Permissions> = {
  admin: {
    canEditDishes: true,
    canEditPrices: true,
    canToggleStock: true,
    canManageUsers: true,
    canViewWaitersPanel: true,
    canViewKitchenKDS: true,
    canManageOrders: true,
    canConfigurePOS: true,
  },
  mozo: {
    canEditDishes: false,
    canEditPrices: false,
    canToggleStock: true, // Mozo puede marcar plato sin stock rápido
    canManageUsers: false,
    canViewWaitersPanel: true,
    canViewKitchenKDS: false,
    canManageOrders: true,
    canConfigurePOS: false,
  },
  cocina: {
    canEditDishes: false,
    canEditPrices: false,
    canToggleStock: true, // Cocina puede avisar que no hay stock de un plato
    canManageUsers: false,
    canViewWaitersPanel: false,
    canViewKitchenKDS: true,
    canManageOrders: true,
    canConfigurePOS: false,
  },
  cliente: {
    canEditDishes: false,
    canEditPrices: false,
    canToggleStock: false,
    canManageUsers: false,
    canViewWaitersPanel: false,
    canViewKitchenKDS: false,
    canManageOrders: false,
    canConfigurePOS: false,
  },
};

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
  pin?: string;
  active: boolean;
  tableAssigned?: string;
}
