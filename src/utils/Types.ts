export interface Activity {
  id: string;
  name: string;
  rating?: number;
  location?: string;
  timeAgo?: string;
}
export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  imageUrl: string;
  location?: string;
  timeAgo?: string;
}
export interface List {
  id: string;
  name: string;
  description: string;
  count: number;
  likes?: number;
  nearby?: string;
}
