import { Injectable, signal } from '@angular/core';
import { UserProfile } from '../models/user.model';

const STORAGE_KEY = 'ilmaterello_profile_data';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Comensal Il Matterello',
  nickname: 'comensal_matterello',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
};

/**
 * Comprime y escala cualquier foto seleccionada por el usuario (desde celular o PC)
 * a un tamaño óptimo para avatares (320px, JPEG ~25KB) para no superar la cuota de localStorage.
 */
export function compressAvatarImage(file: File, maxDim = 320, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer el archivo de imagen.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Formato de imagen no soportado.'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profileSignal = signal<UserProfile>(this.loadProfile());

  readonly profile = this.profileSignal.asReadonly();

  private loadProfile(): UserProfile {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(stored) };
      }
    } catch {
      // Ignorar fallback si localStorage no está disponible
    }
    return DEFAULT_PROFILE;
  }

  updateProfile(updates: Partial<UserProfile>): void {
    const updated = { ...this.profileSignal(), ...updates };
    this.profileSignal.set(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Manejar storage quota si aplica
    }
  }

  setAvatar(dataUrl: string): void {
    this.updateProfile({ avatar: dataUrl });
  }

  removeAvatar(): void {
    this.updateProfile({ avatar: undefined });
  }

  setNickname(nickname: string): void {
    const cleaned = nickname.trim().replace(/^@/, '');
    this.updateProfile({ nickname: cleaned || 'comensal' });
  }
}
