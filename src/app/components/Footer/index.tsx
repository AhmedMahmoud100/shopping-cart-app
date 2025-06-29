import { Layout } from 'antd';

import styles from './Footer.module.css';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className={styles?.footer}>
      Shopping Cart App ©{new Date().getFullYear()} Created with React & Ant Design
    </AntFooter>
  );
};

export default Footer; 