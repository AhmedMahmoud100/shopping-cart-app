import { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

// Lazy load page components
const ProductList = lazy(() => import('@/modules/product/pages/ProductList'));
const ProductDetails = lazy(() => import('@/modules/product/pages/ProductDetails'));
const Cart = lazy(() => import('@/modules/cart/pages/Cart'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
}; 