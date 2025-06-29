import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useCartStore } from '@/store';

import { Badge, Layout, Menu } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';

import styles from './Header.module.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const location = useLocation();
  const { cart } = useCartStore();
  const cartItemCount = cart?.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
      className: styles.menuItem
    },
    {
      key: '/cart',
      icon: (
        <Badge count={cartItemCount} size="small">
          <ShoppingCartOutlined />
        </Badge>
      ),
      label: <Link to="/cart">Cart</Link>,
      className: styles.menuItem
    }
  ];

  return (
    <AntHeader className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        className={styles.menu}
        items={menuItems}
      />
    </AntHeader>
  );
};

export default Header; 