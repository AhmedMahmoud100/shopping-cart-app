import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store';
import ProductCard from './ProductCard';
import GridLoader from './GridLoader';
import { useTheme } from '@/theme';
import type { Product } from '@/types';

interface ProductGridCellProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
  products: Product[];
  columnCount: number;
  rowHeight: number;
}

const ProductGridCell: React.FC<ProductGridCellProps> = ({
  columnIndex,
  rowIndex,
  style,
  products,
  columnCount,
  rowHeight
}) => {
  const token = useTheme();

  const navigate = useNavigate();

  const { addToCart } = useCartStore();
  
  const handleAddToCart = (e : React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product)
  }

  const handleViewDetails = (e : React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`)
  }

  const productIndex = rowIndex * columnCount + columnIndex;
  const product = products[productIndex];
  
  return (
    <div style={style}>
      {!product ? (
        <GridLoader rowHeight={rowHeight} />
      ) : (
        <div style={{ margin: token.marginXS }}>
          <ProductCard 
            product={product}
            handleAddToCart={handleAddToCart}
            handleViewDetails={handleViewDetails}
          />
        </div>
      )}
    </div>
  );
}

export default ProductGridCell; 