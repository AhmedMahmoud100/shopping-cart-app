import React from 'react';

import { Typography, Row } from 'antd';

import type { CartItem } from '@/types';

import styles from './OrderSummary.module.css';

const { Text } = Typography;

interface OrderSummaryProps {
  cart: CartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart }) => {
  const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);
  const tax = total * 0.1;
  const finalTotal = total + tax;

  return (
    <div>
      <Row justify="space-between">
        <Text>Subtotal ({cart.length} items):</Text>
        <Text strong>${total.toFixed(2)}</Text>
      </Row>
      <Row justify="space-between">
        <Text>Shipping:</Text>
        <Text>Free</Text>
      </Row>
      <Row justify="space-between">
        <Text>Tax:</Text>
        <Text>${tax.toFixed(2)}</Text>
      </Row>
      <hr className={styles.divider} />
      <Row justify="space-between">
        <Text strong className={styles.totalLabel}>
          Total:
        </Text>
        <Text strong className={styles.totalAmount}>
          ${finalTotal.toFixed(2)}
        </Text>
      </Row>
    </div>
  );
};

export default OrderSummary; 