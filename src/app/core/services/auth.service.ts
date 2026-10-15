import { Injectable, computed, signal } from '@angular/core';
import { ROLE_PERMISSIONS, Role, User } from '../models/user.model';

const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    name: 'Gianluca (Encargado)',
    role: 'admin',
    pin: '1234',
    active: true,
  },
  {
    id: 'u2',
    name: 'Mateo (Salón / Mozo)',
    role: 'mozo',
    pin: '2211',
    active: true,
    tableAssigned: 'Mesas 1 a 6',
  },
  {
    id: 'u3',
    name: 'Lucía (Salón / Moza)',
    role: 'mozo',
    pin: '3344',
    active: true,
    tableAssigned: 'Mesas 7 a 12',
  },
  {
    id: 'u4',
    name: 'Chef Marco (Jefe de Cocina)',
    role: 'cocina',
    pin: '5566',
    active: true,
  },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentRoleSignal = signal<Role>('cliente');
  private readonly usersSignal = signal<User[]>(INITIAL_USERS);

  readonly currentRole = this.currentRoleSignal.asReadonly();
  readonly users = computed(() => this.usersSignal());

  readonly permissions = computed(() => ROLE_PERMISSIONS[this.currentRoleSignal()]);

  readonly activeStaffCount = computed(
    () => this.usersSignal().filter((u) => u.active).length,
  );

  setRole(role: Role): void {
    this.currentRoleSignal.set(role);
  }

  addUser(name: string, role: Role, pin: string): void {
    const newUser: User = {
      id: `u-${Date.now()}`,
      name,
      role,
      pin,
      active: true,
    };
    this.usersSignal.update((users) => [...users, newUser]);
  }

  toggleUserActive(userId: string): void {
    this.usersSignal.update((users) =>
      users.map((u) => (u.id === userId ? { ...u, active: !u.active } : u)),
    );
  }

  deleteUser(userId: string): void {
    this.usersSignal.update((users) => users.filter((u) => u.id !== userId));
  }
}
