import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store';
import { Button, Typography, Space, Row, Col, Image } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { getProductById } from '../helpers/productsService';
import { useTheme } from '@/theme';

const { Title, Text, Paragraph } = Typography;

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCartStore();
  const token = useTheme();

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div style={{ padding: token.paddingLG, textAlign: 'center' }}>
        <Title level={2}>Product not found</Title>
        <Button type="primary" onClick={() => navigate('/')}>
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ padding: `${token.paddingLG} 0` }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/')}
        style={{ marginBottom: token.marginLG }}
      >
        Back to Products
      </Button>

      <Row gutter={[48, 24]}>
        <Col xs={24} lg={12}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ 
              width: '100%', 
              height: '400px',
              borderRadius: token.borderRadius,
              objectFit: 'cover'
            }}
          />
        </Col>
        
        <Col xs={24} lg={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={1}>{product.name}</Title>
              <Text strong style={{ fontSize: token.fontSizeXL, color: token.colorPrimary }}>
                ${product.price}
              </Text>
            </div>

            <div>
              <Title level={3}>Description</Title>
              <Paragraph>{product.description}</Paragraph>
            </div>

            {product.features && product.features.length > 0 && (
              <div>
                <Title level={3}>Features</Title>
                <ul>
                  {product.features.map((feature : string, index : number) => (
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
              style={{width : 200}}
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