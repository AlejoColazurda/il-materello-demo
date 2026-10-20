import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { PreloadedRoleType } from '../../../core/models/user.model';

export type AuthMode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-staff-auth-modal',
  imports: [],
  templateUrl: './staff-auth-modal.html',
  styleUrl: './staff-auth-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffAuthModal {
  private readonly authService = inject(AuthService);

  readonly isOpen = input(false);
  readonly closed = output<void>();
  readonly loginSuccess = output<void>();

  readonly mode = signal<AuthMode>('login');
  readonly showPassword = signal(false);
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  // Campos Login
  readonly loginIdentifier = signal('');
  readonly loginPassword = signal('');

  // Campos Registro
  readonly regName = signal('');
  readonly regNickname = signal('');
  readonly regEmail = signal('');
  readonly regPassword = signal('');
  readonly regRole = signal('mozo');
  readonly regPin = signal('');

  // Campos Recuperación
  readonly forgotEmail = signal('');

  readonly roles = this.authService.roles;

  togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  setMode(newMode: AuthMode): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.mode.set(newMode);
  }

  handleLogin(): void {
    this.errorMessage.set(null);
    const identifier = this.loginIdentifier().trim();
    const password = this.loginPassword().trim();

    if (!identifier || !password) {
      this.errorMessage.set('Por favor completa todos los campos.');
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      const res = this.authService.login(identifier, password);
      if (res.success) {
        this.loginSuccess.emit();
        this.close();
      } else {
        this.errorMessage.set(res.message || 'Error al iniciar sesión.');
      }
    }, 450);
  }

  loginWithDemo(role: PreloadedRoleType): void {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.authService.loginAsDemo(role);
      this.loginSuccess.emit();
      this.close();
    }, 250);
  }

  handleRegister(): void {
    this.errorMessage.set(null);
    const name = this.regName().trim();
    const nickname = this.regNickname().trim();
    const email = this.regEmail().trim();
    const password = this.regPassword().trim();
    const roleId = this.regRole();
    const pin = this.regPin().trim();

    if (!name || !email || !password) {
      this.errorMessage.set('Por favor completa nombre, email y contraseña.');
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      const res = this.authService.registerStaff({
        name,
        nickname: nickname || name.toLowerCase().replace(/\s+/g, '_'),
        email,
        password,
        roleId,
        pin: pin || '1234',
      });

      if (res.success) {
        this.successMessage.set('¡Cuenta creada con éxito! Ahora podés iniciar sesión.');
        this.loginIdentifier.set(email);
        this.loginPassword.set(password);
        this.setMode('login');
      } else {
        this.errorMessage.set(res.message || 'Error al registrar personal.');
      }
    }, 500);
  }

  handleForgot(): void {
    const email = this.forgotEmail().trim();
    if (!email) {
      this.errorMessage.set('Por favor ingresa tu email registrado.');
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      const res = this.authService.recoverPassword(email);
      this.successMessage.set(res.message);
    }, 400);
  }

  close(): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.showPassword.set(false);
    this.closed.emit();
  }
}
