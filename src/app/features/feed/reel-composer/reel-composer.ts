import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { Dish } from '../../../core/models/dish.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-reel-composer',
  imports: [],
  templateUrl: './reel-composer.html',
  styleUrl: './reel-composer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReelComposer {
  private readonly menuService = inject(MenuService);

  readonly isOpen = input(false);
  readonly closed = output<void>();
  readonly dishPublished = output<Dish>();

  readonly fileInputRef = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  // Media state
  readonly mediaType = signal<'image' | 'video' | null>(null);
  readonly mediaUrl = signal<string | null>(null);
  readonly fileName = signal<string | null>(null);
  readonly dragActive = signal(false);
  readonly isUrlInputOpen = signal(false);
  readonly directUrlInput = signal('');

  // Dish metadata (Instagram composer fields)
  readonly dishName = signal('');
  readonly dishPrice = signal<number | null>(null);
  readonly dishCategory = signal('pastas');
  readonly dishCaption = signal('');
  readonly prepTime = signal('15-20 min');
  readonly selectedTags = signal<string[]>(['Pasta Fresca', 'Receta Tradicional']);
  readonly selectedAudio = signal('Audio original · Cocina Il Matterello');
  readonly inStock = signal(true);
  readonly allowComments = signal(true);
  readonly isFeatured = signal(false);

  // Upload & publish state
  readonly isPublishing = signal(false);
  readonly publishProgress = signal(0);
  readonly publishSuccess = signal(false);
  readonly publishedDish = signal<Dish | null>(null);

  readonly categories = this.menuService.categories;

  readonly availableTags = [
    { label: 'Pasta Fresca', icon: 'tools-kitchen-2' },
    { label: 'Receta Tradicional', icon: 'certificate' },
    { label: 'Vegetariano', icon: 'leaf' },
    { label: 'Al Dente', icon: 'flame' },
    { label: 'Recomendado del Chef', icon: 'star' },
    { label: 'Apto Celíaco', icon: 'shield-check' },
    { label: 'Frutos de Mar', icon: 'fish' },
  ];

  readonly audioTracks = [
    'Audio original · Cocina Il Matterello',
    'Tarantella Napoletana Tradizionale',
    'Ambiente acústico de salón',
    'Sonido de Fuego y Sartenes · Pastas',
  ];

  onFileSelected(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    if (inputEl.files && inputEl.files.length > 0) {
      this.handleFile(inputEl.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive.set(false);

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  private handleFile(file: File): void {
    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');

    if (!isVideo && !isImage) {
      alert('Por favor selecciona una imagen o video válido.');
      return;
    }

    this.fileName.set(file.name);
    this.mediaType.set(isVideo ? 'video' : 'image');

    const reader = new FileReader();
    reader.onload = () => {
      this.mediaUrl.set(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  applyDirectUrl(): void {
    const url = this.directUrlInput().trim();
    if (!url) return;
    this.mediaUrl.set(url);
    this.mediaType.set(url.match(/\.(mp4|webm|mov)(\?|$)/i) ? 'video' : 'image');
    this.fileName.set('Enlace externo');
    this.isUrlInputOpen.set(false);
  }

  removeMedia(): void {
    this.mediaUrl.set(null);
    this.mediaType.set(null);
    this.fileName.set(null);
  }

  toggleTag(tag: string): void {
    const current = this.selectedTags();
    if (current.includes(tag)) {
      this.selectedTags.set(current.filter((t) => t !== tag));
    } else {
      this.selectedTags.set([...current, tag]);
    }
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags().includes(tag);
  }

  get canShare(): boolean {
    return !!this.dishName().trim() && (this.dishPrice() ?? 0) > 0 && !this.isPublishing();
  }

  shareReel(): void {
    if (!this.canShare) {
      return;
    }

    this.isPublishing.set(true);
    this.publishProgress.set(15);

    const progressTimer = setInterval(() => {
      this.publishProgress.update((p) => {
        if (p >= 90) {
          clearInterval(progressTimer);
          return 90;
        }
        return p + 25;
      });
    }, 250);

    setTimeout(() => {
      clearInterval(progressTimer);
      this.publishProgress.set(100);

      const categoryId = this.dishCategory();
      const gradMap: Record<string, string> = {
        pastas: 'linear-gradient(160deg, #3a2216 0%, #1c100a 60%, #0d0704 100%)',
        antipasto: 'linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)',
        risotto: 'linear-gradient(160deg, #352c1a 0%, #1a150c 50%, #0c0905 100%)',
        'carnes': 'linear-gradient(160deg, #381a1a 0%, #1c0c0c 50%, #0e0606 100%)',
        ensaladas: 'linear-gradient(160deg, #1c301c 0%, #0d1a0d 50%, #060d06 100%)',
        postres: 'linear-gradient(160deg, #381f2b 0%, #1f0f17 50%, #0f070b 100%)',
        bebidas: 'linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)',
      };

      const newDish = this.menuService.addDish({
        name: this.dishName().trim(),
        description: this.dishCaption().trim() || 'Receta artesanal de pasta fresca Il Matterello.',
        price: Number(this.dishPrice()) || 18000,
        categoryId,
        tags: this.selectedTags(),
        inStock: this.inStock(),
        imageUrl: this.mediaUrl() || undefined,
        bgGradient: gradMap[categoryId] || 'linear-gradient(160deg, #2a1f1a, #140e0a)',
      });

      this.publishedDish.set(newDish);
      this.isPublishing.set(false);
      this.publishSuccess.set(true);
      this.dishPublished.emit(newDish);
    }, 1200);
  }

  closeModal(): void {
    this.resetForm();
    this.closed.emit();
  }

  viewInMenu(): void {
    const dish = this.publishedDish();
    if (dish) {
      this.menuService.setActiveCategory(dish.categoryId);
    }
    this.closeModal();
  }

  private resetForm(): void {
    this.mediaType.set(null);
    this.mediaUrl.set(null);
    this.fileName.set(null);
    this.dishName.set('');
    this.dishPrice.set(null);
    this.dishCaption.set('');
    this.isPublishing.set(false);
    this.publishSuccess.set(false);
    this.publishedDish.set(null);
    this.directUrlInput.set('');
    this.isUrlInputOpen.set(false);
  }
}
