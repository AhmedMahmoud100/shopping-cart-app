import React from 'react';

import { Space, Button } from 'antd';

import styles from './OrderActions.module.css';

interface OrderActionsProps {
  onProceedToCheckout: () => void;
  onContinueShopping: () => void;
  onClearCart: () => void;
}

const OrderActions: React.FC<OrderActionsProps> = ({
  onProceedToCheckout,
  onContinueShopping,
  onClearCart
}) => {
  return (
    <Space direction="vertical" size="small" className={styles.fullWidth}>
      <Button
        type="primary"
        size="large"
        className={styles.fullWidth}
        onClick={onProceedToCheckout}
      >
        Proceed to Checkout
      </Button>
      <Button
        onClick={onContinueShopping}
        className={styles.fullWidth}
      >
        Continue Shopping
      </Button>
      <Button
        danger
        onClick={onClearCart}
        className={styles.fullWidth}
      >
        Clear Cart
      </Button>
    </Space>
  );
};

export default OrderActions; 