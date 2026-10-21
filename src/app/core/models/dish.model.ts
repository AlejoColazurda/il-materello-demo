export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  tags: string[];
  inStock: boolean;
  likes: number;
  bgGradient: string;
  imageUrl?: string;
  /** La foto es ilustrativa (no es del restaurante): hay que reemplazarla por una propia. */
  photoIsPlaceholder?: boolean;
  shares?: number;
}
