import React from 'react';

import { Card, Row, Col, Space, Typography, InputNumber, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import type { CartItem } from '@/types';

import styles from './CartProductCard.module.css';

const { Title, Text } = Typography;

interface CartProductCardProps {
  item: CartItem;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  item,
  onQuantityChange,
  onRemoveItem
}) => {
  return (
    <Card key={item.id} size="small">
      <Row gutter={16} align="middle">
        <Col xs={24} sm={24} lg={10}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.productImage}
          />
        </Col>
        
        <Col xs={24} sm={24} lg={14}>
          <Space direction="vertical" size="small">
            <Title level={4} className={styles.productTitle}>
              {item.name}
            </Title>
            <Text type="secondary">{item.description}</Text>
          </Space>
        </Col>
        
        <Col xs={12} sm={6}  lg={2}>
          <Text strong className={styles.productPrice}>
            ${item.price}
          </Text>
        </Col>
        
        <Col xs={12} sm={8}  lg={6}>
          <InputNumber
            min={1}
            max={99}
            value={item.quantity}
            onChange={(value) => onQuantityChange(item.id, value || 1)}
            className={styles.quantityInput}
          />
        </Col>
        
        <Col xs={24} sm={8}>
          <Space size="large" className={styles.actionSpace}>
            <Text strong className={styles.totalPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onRemoveItem(item.id)}
              size="small"
            >
              Remove
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default CartProductCard; 