import React from 'react';

import { Spin } from 'antd';

import styles from './GridLoader.module.css';

interface GridLoaderProps {
  rowHeight: number;
}

const GridLoader: React.FC<GridLoaderProps> = ({ rowHeight }) => {
  return (
    <div className={styles.loaderContainer} style={{ height: rowHeight - 20 }}>
      <Spin size="small" />
    </div>
  );
};

export default GridLoader; 