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
  shares?: number;
}
