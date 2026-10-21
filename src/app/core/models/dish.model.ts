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
  /** Plato destacado: aparece en la fila de destacados y con una estrella en la carta. */
  featured?: boolean;
  shares?: number;
}

/** Promo o sugerencia que se muestra como banner grande al comienzo de la carta. */
export interface Promo {
  active: boolean;
  /** Etiqueta corta del banner. Ej: "Sugerencia del chef", "Promo de la semana". */
  badge: string;
  title: string;
  subtitle: string;
  /** Plato que abre el banner (y del que toma la foto). */
  dishId: string;
}

