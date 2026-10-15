export interface Comment {
  id: string;
  dishId: string;
  author: string;
  text: string;
  avatar?: string;
  timeAgo?: string;
  likes?: number;
}
