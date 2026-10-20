export type PreloadedRoleType = 'admin' | 'mozo' | 'cocina';
export type Role = PreloadedRoleType | 'cliente';

export interface RolePermissions {
  // Carta & Catálogo
  canCreateDishes: boolean;
  canEditDishes: boolean;
  canEditPrices: boolean;
  canToggleStock: boolean;
  canDeleteDishes: boolean;

  // Salón & Comandas
  canViewOrders: boolean;
  canAdvanceOrderStatus: boolean;
  canCancelOrders: boolean;
  canCloseTables: boolean;

  // Cocina KDS
  canViewKitchenKDS: boolean;
  canAlertKitchenStock: boolean;

  // Personal & Roles
  canManageStaff: boolean;
  canManageRoles: boolean;

  // Integraciones POS
  canConfigurePOS: boolean;
}

export interface CustomRole {
  id: string;
  name: string;
  description: string;
  badgeClass: string;
  isSystem: boolean;
  permissions: RolePermissions;
}

export interface StaffUser {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password?: string;
  roleId: string;
  avatar?: string;
  pin?: string;
  active: boolean;
  tableAssigned?: string;
  lastLogin?: Date;
}

export interface UserProfile {
  name: string;
  nickname: string;
  avatar?: string;
}

export const PRELOADED_ROLES: CustomRole[] = [
  {
    id: 'admin',
    name: 'Administrador General',
    description: 'Control total del restaurante, catálogo, personal, roles y configuración de POS.',
    badgeClass: 'role-admin',
    isSystem: true,
    permissions: {
      canCreateDishes: true,
      canEditDishes: true,
      canEditPrices: true,
      canToggleStock: true,
      canDeleteDishes: true,
      canViewOrders: true,
      canAdvanceOrderStatus: true,
      canCancelOrders: true,
      canCloseTables: true,
      canViewKitchenKDS: true,
      canAlertKitchenStock: true,
      canManageStaff: true,
      canManageRoles: true,
      canConfigurePOS: true,
    },
  },
  {
    id: 'mozo',
    name: 'Mozo / Salón',
    description: 'Atención de salón, gestión de comandas por mesa, pausa de stock y cobro.',
    badgeClass: 'role-mozo',
    isSystem: true,
    permissions: {
      canCreateDishes: false,
      canEditDishes: false,
      canEditPrices: false,
      canToggleStock: true,
      canDeleteDishes: false,
      canViewOrders: true,
      canAdvanceOrderStatus: true,
      canCancelOrders: true,
      canCloseTables: true,
      canViewKitchenKDS: false,
      canAlertKitchenStock: false,
      canManageStaff: false,
      canManageRoles: false,
      canConfigurePOS: false,
    },
  },
  {
    id: 'cocina',
    name: 'Jefe de Cocina / KDS',
    description: 'Visualización de pedidos en preparación en pantalla de cocina y aviso de insumos.',
    badgeClass: 'role-cocina',
    isSystem: true,
    permissions: {
      canCreateDishes: false,
      canEditDishes: false,
      canEditPrices: false,
      canToggleStock: true,
      canDeleteDishes: false,
      canViewOrders: false,
      canAdvanceOrderStatus: false,
      canCancelOrders: false,
      canCloseTables: false,
      canViewKitchenKDS: true,
      canAlertKitchenStock: true,
      canManageStaff: false,
      canManageRoles: false,
      canConfigurePOS: false,
    },
  },
];
