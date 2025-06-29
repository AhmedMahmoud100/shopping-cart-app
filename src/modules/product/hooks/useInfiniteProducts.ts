import { useState, useCallback, useEffect } from 'react';

import { getProductsBatch, getTotalProductsCount } from '../helpers/productsService';
import { generateProductsData } from '../helpers/productsGenerator';

import { useResponsiveColumns } from './useResponsiveColumns';

import type { Product } from '@/types';

const BATCH_SIZE = 50;

export const useInfiniteProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  const { columnCount, columnWidth } = useResponsiveColumns();
  const TOTAL_PRODUCTS = getTotalProductsCount();

  const rowCount = Math.ceil(TOTAL_PRODUCTS / columnCount);

  useEffect(() => {
    generateProductsData();
    loadMoreProducts(0);
  }, []);

  const loadMoreProducts = useCallback((startIndex: number) => {
    if (loading) return;
    
    setLoading(true);
    
    const newProducts = getProductsBatch(startIndex, BATCH_SIZE);
    
    setProducts(prev => {
      const updated = [...prev];
      newProducts.forEach((product, index) => {
        updated[startIndex + index] = product;
      });
      return updated;
    });
    
    setLoading(false);
  }, [loading]);

  const isRowLoaded = useCallback((index: number) => {
    const startIndex = index * columnCount;
    const stopIndex = Math.min(startIndex + columnCount, TOTAL_PRODUCTS);
    
    if (startIndex >= products.length) {
      return false;
    }
    
    const rowProducts = products.slice(startIndex, stopIndex);
    const loadedProducts = rowProducts.filter(p => p !== undefined);
    const isLoaded = loadedProducts.length === rowProducts.length && rowProducts.length > 0;
    
    return isLoaded;
  }, [products, columnCount, TOTAL_PRODUCTS]);

  const loadMoreRows = useCallback((startIndex: number, stopIndex: number) => {
    for (let i = startIndex; i <= stopIndex; i++) {
      if (!isRowLoaded(i)) {
        const rowStartIndex = i * columnCount;
        loadMoreProducts(rowStartIndex);
      }
    }
  }, [loadMoreProducts, isRowLoaded, columnCount]);

  return {
    products,
    loading,
    rowCount,
    isRowLoaded,
    loadMoreRows,
    TOTAL_PRODUCTS,
    columnCount,
    columnWidth
  };
}; 