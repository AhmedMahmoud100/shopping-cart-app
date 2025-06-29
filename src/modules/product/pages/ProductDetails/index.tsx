import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useCartStore } from '@/store';

import { Button, Typography, Space, Row, Col, Image } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import ProductNotFound from '../../components/ProductNotFound';

import { getProductById } from '../../helpers/productsService';

import { useTheme } from '@/theme';

import styles from './ProductDetails.module.css';

const { Title, Text, Paragraph } = Typography;

const ProductDetails: React.FC = () => {
  const token = useTheme();

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  
  const { addToCart } = useCartStore();

  const product = getProductById(Number(id));

  if (!product) {
    return <ProductNotFound onBackToProducts={() => navigate('/')} />;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productDetailsContainer}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/')}
        className={styles.backButton}
      >
        Back to Products
      </Button>

      <Row gutter={[48, 24]}>
        <Col xs={24} lg={12}>
          <Image
            src={product.image}
            alt={product.name}
            className={styles.productImage}
            style={{ borderRadius: token.borderRadius }}
          />
        </Col>
        
        <Col xs={24} lg={12}>
          <Space direction="vertical" size="large" className={styles.productInfo}>
            <div>
              <Title level={1} className={styles.productTitle}>{product.name}</Title>
              <Text strong className={styles.productPrice}>
                ${product.price}
              </Text>
            </div>

            <div className={styles.descriptionSection}>
              <Title level={3}>Description</Title>
              <Paragraph>{product.description}</Paragraph>
            </div>

            {product.features && product.features.length > 0 && (
              <div className={styles.featuresSection}>
                <Title level={3}>Features</Title>
                <ul className={styles.featuresList}>
                  {product.features.map((feature: string, index: number) => (
                    <li key={index}>
                      <Text>{feature}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              className={styles.addToCartButton}
            >
              Add to Cart
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails; 