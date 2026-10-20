import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ProfileService, compressAvatarImage } from '../../../core/services/profile.service';
import { AuthService } from '../../../core/services/auth.service';

export interface AvatarPreset {
  label: string;
  url: string;
}

@Component({
  selector: 'app-profile-modal',
  imports: [UpperCasePipe],
  templateUrl: './profile-modal.html',
  styleUrl: './profile-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileModal {
  private readonly profileService = inject(ProfileService);
  private readonly authService = inject(AuthService);

  readonly isOpen = input(false);
  readonly closed = output<void>();

  readonly currentProfile = this.profileService.profile;
  readonly staffUser = this.authService.currentStaffUser;

  readonly previewAvatar = signal<string | null>(null);
  readonly draftNickname = signal<string>('');
  readonly draftName = signal<string>('');
  readonly isProcessingImage = signal(false);
  readonly saveFeedback = signal<string | null>(null);

  readonly presetAvatars: AvatarPreset[] = [
    {
      label: 'Pasta Lover 1',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    },
    {
      label: 'Pasta Lover 2',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    },
    {
      label: 'Chef',
      url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80',
    },
    {
      label: 'Foodie',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    },
  ];

  ngOnInit(): void {
    this.syncFromCurrent();
  }

  syncFromCurrent(): void {
    const staff = this.staffUser();
    if (staff) {
      this.previewAvatar.set(staff.avatar || null);
      this.draftNickname.set(staff.nickname || staff.name.toLowerCase().replace(/\s+/g, '_'));
      this.draftName.set(staff.name);
    } else {
      const p = this.currentProfile();
      this.previewAvatar.set(p.avatar || null);
      this.draftNickname.set(p.nickname);
      this.draftName.set(p.name);
    }
  }

  async onAvatarSelected(event: Event): Promise<void> {
    const inputEl = event.target as HTMLInputElement;
    if (!inputEl.files || inputEl.files.length === 0) return;

    const file = inputEl.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Por favor seleccioná un archivo de imagen (JPG, PNG o WEBP).');
      return;
    }

    this.isProcessingImage.set(true);
    try {
      // Comprimir foto a tamaño óptimo para que quepa en localStorage
      const compressedDataUrl = await compressAvatarImage(file, 320, 0.85);
      this.previewAvatar.set(compressedDataUrl);
    } catch {
      // Fallback a FileReader directo si no funciona canvas
      const reader = new FileReader();
      reader.onload = () => {
        this.previewAvatar.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    } finally {
      this.isProcessingImage.set(false);
      // Reset input para permitir volver a seleccionar el mismo archivo si se desea
      inputEl.value = '';
    }
  }

  selectPreset(url: string): void {
    this.previewAvatar.set(url);
  }

  removePhoto(): void {
    this.previewAvatar.set(null);
  }

  saveProfile(): void {
    const avatar = this.previewAvatar() || undefined;
    const nickname = this.draftNickname().trim().replace(/^@/, '');
    const name = this.draftName().trim();

    // Actualizar perfil de cliente/general
    this.profileService.updateProfile({
      avatar,
      nickname: nickname || 'comensal',
      name: name || 'Comensal Il Matterello',
    });

    // Si además es personal autenticado, actualizar en staff
    const staff = this.staffUser();
    if (staff) {
      this.authService.updateStaffProfile(staff.id, {
        avatar,
        nickname: nickname || staff.nickname,
        name: name || staff.name,
      });
    }

    this.saveFeedback.set('Perfil guardado con éxito');
    setTimeout(() => {
      this.saveFeedback.set(null);
      this.closed.emit();
    }, 700);
  }

  close(): void {
    this.closed.emit();
  }
}
