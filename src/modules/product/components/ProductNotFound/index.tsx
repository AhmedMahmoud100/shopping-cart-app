import React from 'react';

import { Button, Typography } from 'antd';

import styles from './ProductNotFound.module.css';

const { Title } = Typography;

interface ProductNotFoundProps {
  onBackToProducts: () => void;
}

const ProductNotFound: React.FC<ProductNotFoundProps> = ({ onBackToProducts }) => {
  return (
    <div className={styles.productNotFoundContainer}>
      <Title level={2} className={styles.productNotFoundTitle}>
        Product not found
      </Title>
      <Button 
        type="primary" 
        onClick={onBackToProducts}
        className={styles.backButton}
      >
        Back to Products
      </Button>
    </div>
  );
};

export default ProductNotFound; 