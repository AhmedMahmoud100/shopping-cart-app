import { create } from 'zustand';

import type { Product, CartItem } from '@/types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      let newCart;
      if (existing) {
        newCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }
      return { cart: newCart };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      return { cart: newCart };
    });
  },
  updateQuantity: (id, quantity) => {
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return { cart: newCart };
    });
  },
  clearCart: () => set({ cart: [] }),
})); 