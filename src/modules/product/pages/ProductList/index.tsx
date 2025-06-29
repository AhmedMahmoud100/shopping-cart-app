import React from 'react';

import { Typography } from 'antd';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import ProductGridCell from '../../components/ProductGridCell';

import { useInfiniteProducts } from '../../hooks/useInfiniteProducts';

import { useTheme } from '@/theme';

import styles from './ProductList.module.css';

const { Title } = Typography;

const ROW_HEIGHT = 380;

const ProductList: React.FC = () => {
  const {
    products,
    rowCount,
    isRowLoaded,
    loadMoreRows,
    TOTAL_PRODUCTS,
    columnCount,
    columnWidth
  } = useInfiniteProducts();
  const token = useTheme();

  const gridWidth = columnCount * columnWidth + 20;

  return (
    <div>
      <Title level={2} style={{ marginBottom: token.marginSM, marginTop: 0 }}>
        Our Products ({TOTAL_PRODUCTS.toLocaleString()} items)
      </Title>
      
      <div style={{ height: 'calc(100vh - 190px)', width: '100%' }}>
        <InfiniteLoader
          isItemLoaded={isRowLoaded}
          itemCount={rowCount}
          loadMoreItems={loadMoreRows}
          threshold={3}
        >
          {({ onItemsRendered, ref }) => (
            <Grid
              ref={ref}
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={window.innerHeight - 190}
              rowCount={rowCount}
              rowHeight={ROW_HEIGHT}
              width={gridWidth}
              onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex, overscanRowStartIndex, overscanRowStopIndex }) => {
                onItemsRendered({
                  visibleStartIndex: visibleRowStartIndex,
                  visibleStopIndex: visibleRowStopIndex,
                  overscanStartIndex: overscanRowStartIndex,
                  overscanStopIndex: overscanRowStopIndex,
                });
              }}
              className={styles.infiniteLoaderContainer}
            >
              {({ columnIndex, rowIndex, style }) => (
                <ProductGridCell
                  columnIndex={columnIndex}
                  rowIndex={rowIndex}
                  style={style}
                  products={products}
                  columnCount={columnCount}
                  rowHeight={ROW_HEIGHT}
                />
              )}
            </Grid>
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
};

export default ProductList; 