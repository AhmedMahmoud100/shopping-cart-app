import React from 'react';

import { Button, Empty } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import { useTheme } from '@/theme';

import styles from './EmptyCart.module.css';

interface EmptyCartProps {
  onContinueShopping: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onContinueShopping }) => {
  const token = useTheme();

  return (
    <div className={styles.emptyCartContainer}>
      <Empty
        image={<ShoppingOutlined className={styles.emptyCartIcon} style={{ color: token.colorBorder }} />}
        description="Your cart is empty"
      >
        <Button type="primary" onClick={onContinueShopping}>
          Continue Shopping
        </Button>
      </Empty>
    </div>
  );
};

export default EmptyCart; 