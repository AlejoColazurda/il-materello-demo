import { Injectable, computed, signal } from '@angular/core';
import { CustomRole, PRELOADED_ROLES, RolePermissions, StaffUser } from '../models/user.model';
import { ADMIN_ACCESS, sha256Hex } from '../config/admin-access';
import { ORDERS_ENABLED } from '../config/features';

const STAFF_SESSION_KEY = 'ilmaterello_staff_session';
const ROLES_STORAGE_KEY = 'ilmaterello_custom_roles';
const USERS_STORAGE_KEY = 'ilmaterello_staff_users';

const INITIAL_STAFF_USERS: StaffUser[] = [
  {
    id: 'u-admin-1',
    name: 'Gianluca Rossi',
    nickname: 'gianluca_admin',
    email: 'admin@ilmaterello.com',
    password: 'admin',
    roleId: 'admin',
    pin: '1234',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    active: true,
  },
  {
    id: 'u-mozo-1',
    name: 'Mateo Salón',
    nickname: 'mateo_mozo',
    email: 'mozo@ilmaterello.com',
    password: 'mozo',
    roleId: 'mozo',
    pin: '2211',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    active: true,
    tableAssigned: 'Mesas 1 a 6',
  },
  {
    id: 'u-cocina-1',
    name: 'Chef Marco',
    nickname: 'marco_chef',
    email: 'cocina@ilmaterello.com',
    password: 'cocina',
    roleId: 'cocina',
    pin: '5566',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    active: true,
  },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly rolesSignal = signal<CustomRole[]>(this.loadRoles());
  private readonly staffUsersSignal = signal<StaffUser[]>(this.loadStaffUsers());
  private readonly currentStaffUserSignal = signal<StaffUser | null>(this.loadStaffSession());

  readonly roles = computed(() => this.rolesSignal());
  readonly staffUsers = computed(() => this.staffUsersSignal());
  readonly currentStaffUser = this.currentStaffUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.currentStaffUserSignal() !== null);

  readonly currentRole = computed<CustomRole | null>(() => {
    const user = this.currentStaffUserSignal();
    if (!user) return null;
    return this.rolesSignal().find((r) => r.id === user.roleId) || null;
  });

  readonly permissions = computed<RolePermissions>(() => {
    const role = this.currentRole();
    if (!role) {
      return {
        canCreateDishes: false,
        canEditDishes: false,
        canEditPrices: false,
        canToggleStock: false,
        canDeleteDishes: false,
        canViewOrders: false,
        canAdvanceOrderStatus: false,
        canCancelOrders: false,
        canCloseTables: false,
        canViewKitchenKDS: false,
        canAlertKitchenStock: false,
        canManageStaff: false,
        canManageRoles: false,
        canConfigurePOS: false,
      };
    }
    return role.permissions;
  });

  /** La carta solo toma pedidos cuando la usa el personal de salón (los comensales solo miran). */
  readonly canTakeOrders = computed(
    () => ORDERS_ENABLED && this.isAuthenticated() && this.permissions().canViewOrders,
  );

  readonly activeStaffCount = computed(
    () => this.staffUsersSignal().filter((u) => u.active).length,
  );

  private loadRoles(): CustomRole[] {
    try {
      const stored = localStorage.getItem(ROLES_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback a roles base
    }
    return PRELOADED_ROLES;
  }

  private loadStaffUsers(): StaffUser[] {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return INITIAL_STAFF_USERS;
  }

  private loadStaffSession(): StaffUser | null {
    try {
      const stored = localStorage.getItem(STAFF_SESSION_KEY);
      if (stored) {
        const user: StaffUser = JSON.parse(stored);
        // Solo administradores con un acceso vigente tienen sesión en el frontend
        return ADMIN_ACCESS.some((entry) => entry.user.id === user.id) ? user : null;
      }
    } catch {
      // fallback
    }
    return null;
  }


  private saveRoles(roles: CustomRole[]): void {
    try {
      localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(roles));
    } catch {}
  }

  private saveStaffUsers(users: StaffUser[]): void {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch {}
  }

  private saveSession(user: StaffUser | null): void {
    try {
      if (user) {
        localStorage.setItem(STAFF_SESSION_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STAFF_SESSION_KEY);
      }
    } catch {}
  }

  /**
   * Inicio de sesión del personal por email/usuario y contraseña o PIN
   */
  login(identifier: string, passOrPin: string): { success: boolean; message?: string } {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = passOrPin.trim();

    const user = this.staffUsersSignal().find(
      (u) =>
        (u.email.toLowerCase() === cleanId ||
          u.nickname.toLowerCase() === cleanId.replace(/^@/, '') ||
          u.name.toLowerCase() === cleanId) &&
        (u.password === cleanPass || u.pin === cleanPass),
    );

    if (!user) {
      return { success: false, message: 'Usuario o contraseña incorrectos.' };
    }

    if (!user.active) {
      return { success: false, message: 'Esta cuenta de personal se encuentra desactivada.' };
    }

    const updatedUser = { ...user, lastLogin: new Date() };
    this.currentStaffUserSignal.set(updatedUser);
    this.saveSession(updatedUser);

    return { success: true };
  }

  /**
   * Acceso del administrador con el enlace tokenizado (?acceso=<token>).
   * Se compara el hash SHA-256 del token, nunca el token en texto plano.
   */
  async loginWithAdminToken(token: string): Promise<boolean> {
    if (!token || typeof crypto === 'undefined' || !crypto.subtle) {
      return false;
    }
    const hash = await sha256Hex(token.trim());
    const access = ADMIN_ACCESS.find((entry) => entry.sha256 === hash);
    if (!access) {
      return false;
    }
    // Cada enlace entra con su propio administrador (nombre visible en el panel)
    const user = { ...access.user, lastLogin: new Date() };
    this.currentStaffUserSignal.set(user);
    this.saveSession(user);
    return true;
  }

  /**
   * Inicia sesión con el primer usuario activo del rol indicado
   */
  loginAsDemo(roleType: 'admin' | 'mozo' | 'cocina'): void {
    const demoUser = this.staffUsersSignal().find((u) => u.roleId === roleType && u.active);
    if (demoUser) {
      this.currentStaffUserSignal.set(demoUser);
      this.saveSession(demoUser);
    }
  }

  logout(): void {
    this.currentStaffUserSignal.set(null);
    this.saveSession(null);
  }

  registerStaff(data: {
    name: string;
    nickname: string;
    email: string;
    password?: string;
    roleId: string;
    pin?: string;
  }): { success: boolean; message?: string; user?: StaffUser } {
    const existing = this.staffUsersSignal().find(
      (u) => u.email.toLowerCase() === data.email.trim().toLowerCase(),
    );

    if (existing) {
      return { success: false, message: 'Ya existe una cuenta registrada con este email.' };
    }

    const newUser: StaffUser = {
      id: `u-${Date.now()}`,
      name: data.name.trim(),
      nickname: data.nickname.trim().replace(/^@/, '') || data.name.toLowerCase().replace(/\s+/g, '_'),
      email: data.email.trim().toLowerCase(),
      password: data.password?.trim() || '1234',
      roleId: data.roleId,
      pin: data.pin?.trim() || '1234',
      active: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    };

    const updated = [...this.staffUsersSignal(), newUser];
    this.staffUsersSignal.set(updated);
    this.saveStaffUsers(updated);

    return { success: true, user: newUser };
  }

  recoverPassword(email: string): { success: boolean; message: string } {
    const cleanEmail = email.trim().toLowerCase();
    const user = this.staffUsersSignal().find((u) => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      // Por seguridad no se delata si el email existe o no, pero informamos positivamente
      return {
        success: true,
        message: 'Si el correo está registrado, enviamos instrucciones para recuperar la contraseña.',
      };
    }

    return {
      success: true,
      message: `Enviamos un enlace de recuperación a ${cleanEmail} (Contraseña actual demo: "${user.password || user.pin}").`,
    };
  }

  updateStaffProfile(userId: string, updates: Partial<StaffUser>): void {
    const updated = this.staffUsersSignal().map((u) =>
      u.id === userId ? { ...u, ...updates } : u,
    );
    this.staffUsersSignal.set(updated);
    this.saveStaffUsers(updated);

    if (this.currentStaffUserSignal()?.id === userId) {
      const curr = { ...this.currentStaffUserSignal()!, ...updates };
      this.currentStaffUserSignal.set(curr);
      this.saveSession(curr);
    }
  }

  toggleUserActive(userId: string): void {
    const updated = this.staffUsersSignal().map((u) =>
      u.id === userId ? { ...u, active: !u.active } : u,
    );
    this.staffUsersSignal.set(updated);
    this.saveStaffUsers(updated);
  }

  deleteUser(userId: string): void {
    const updated = this.staffUsersSignal().filter((u) => u.id !== userId);
    this.staffUsersSignal.set(updated);
    this.saveStaffUsers(updated);
  }

  // GESTOR DE ROLES DINÁMICOS
  createRole(newRoleData: Omit<CustomRole, 'id' | 'isSystem'>): CustomRole {
    const id = `role-${Date.now()}`;
    const newRole: CustomRole = {
      ...newRoleData,
      id,
      isSystem: false,
    };
    const updated = [...this.rolesSignal(), newRole];
    this.rolesSignal.set(updated);
    this.saveRoles(updated);
    return newRole;
  }

  updateRole(roleId: string, updates: Partial<CustomRole>): void {
    const updated = this.rolesSignal().map((r) =>
      r.id === roleId ? { ...r, ...updates } : r,
    );
    this.rolesSignal.set(updated);
    this.saveRoles(updated);
  }

  deleteRole(roleId: string): boolean {
    const role = this.rolesSignal().find((r) => r.id === roleId);
    if (role?.isSystem) {
      return false; // No eliminar roles del sistema
    }
    const updated = this.rolesSignal().filter((r) => r.id !== roleId);
    this.rolesSignal.set(updated);
    this.saveRoles(updated);
    return true;
  }
}
