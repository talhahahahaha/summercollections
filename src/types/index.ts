export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  colors: string[];
  sizes: string[];
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}