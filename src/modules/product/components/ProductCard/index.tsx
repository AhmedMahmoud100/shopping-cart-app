import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import { useTheme } from '@/theme'
import type { Product } from '@/types';
import styles from './ProductCard.module.css';

const { Text } = Typography;

type ProductCardProps = {
    product : Product
    handleAddToCart : (e : React.MouseEvent) => void
    handleViewDetails : (e : React.MouseEvent) => void
}

export default function ProductCard({product , handleAddToCart , handleViewDetails} : ProductCardProps) {
  const token = useTheme();
  
  return (
    <Card
    hoverable
    cover={
      <img
        alt={product.name}
        src={product.image}
        style={{ height: 140, objectFit: 'cover' }}
      />
    }
    actions={[
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>,
      <Button onClick={handleViewDetails}>
        View Details
      </Button>,
    ]}
    onClick={handleViewDetails}
  >
    <Card.Meta
      title={product.name}
      description={
        <Space direction="vertical" size="small">
          <p className={styles.description}>
            {product.description}
          </p>
          <Text strong style={{ fontSize: token.fontSizeLG, color: token.colorPrimary }}>
            ${product.price}
          </Text>
        </Space>
      }
    />
  </Card>
  )
}
