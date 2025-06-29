import { getGeneratedProducts } from './productsGenerator';

import type { Product } from '@/types';

// Load products from generated data
const products: Product[] = getGeneratedProducts();

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsBatch = (startIndex: number, batchSize: number): Product[] => {
  const endIndex = Math.min(startIndex + batchSize, products.length);
  return products.slice(startIndex, endIndex);
};

export const getTotalProductsCount = (): number => {
  return products.length;
}; 