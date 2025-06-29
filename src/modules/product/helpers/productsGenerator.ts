import { faker } from '@faker-js/faker';

import type { Product } from '@/types';

const features = [
  'High quality',
  'Durable',
  'Easy to use',
  'Great value',
  'Popular choice',
];

const generateProduct = (id: number): Product => {
  const productName = faker.commerce.productName();
  
  return {
    id,
    name: productName,
    price: parseFloat(faker.commerce.price({ min: 10, max: 2000 })),
    image: `https://picsum.photos/seed/${id}/300/200`,
    description: faker.commerce.productDescription(),
    features: features,
  };
};

let productsCache: Product[] | null = null;

export const generateProductsData = (count: number = 10000): Product[] => {
  if (productsCache) {
    return productsCache;
  }
  
  const products: Product[] = [];
  for (let i = 1; i <= count; i++) {
    products.push(generateProduct(i));
  }
  
  productsCache = products;
  
  return products;
};

export const getGeneratedProducts = (): Product[] => {
  if (!productsCache) {
    return generateProductsData();
  }
  return productsCache;
};