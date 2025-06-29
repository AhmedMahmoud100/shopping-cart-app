import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { Card, Typography, Space, Row, Col } from 'antd';
import CartProductCard from '../components/CartProductCard';
import OrderActions from '../components/OrderActions/index';
import OrderSummary from '../components/OrderSummary/index';
import EmptyCart from '../components/EmptyCart/index';
import { useTheme } from '@/theme';
import type { CartItem } from '@/types';

const { Title } = Typography;

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const token = useTheme();

  const handleQuantityChange = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleProceedToCheckout = () => {
    console.log('Proceed to checkout');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return <EmptyCart onContinueShopping={handleContinueShopping} />;
  }

  return (
    <div style={{ padding: `${token.paddingLG} 0` }}>
      <Title level={2} style={{ marginBottom: token.marginLG }}>
        Shopping Cart
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16} xl={18}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {cart.map((item: CartItem) => (
              <CartProductCard
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            ))}
          </Space>
        </Col>

        <Col xs={24} lg={8} xl={6}>
          <Card>
            <Title level={3}>Order Summary</Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <OrderSummary cart={cart} />
              <OrderActions
                onProceedToCheckout={handleProceedToCheckout}
                onContinueShopping={handleContinueShopping}
                onClearCart={handleClearCart}
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart; 