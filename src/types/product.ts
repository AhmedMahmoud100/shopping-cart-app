export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
} 