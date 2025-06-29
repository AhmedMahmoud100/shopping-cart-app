import { useState, useEffect } from 'react';

interface ResponsiveConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
}

const DEFAULT_CONFIG: ResponsiveConfig = {
  mobile: 1,       // 450px - 768px
  tablet: 2,       // 768px - 1024px
  desktop: 3,      // 1024px - 1440px
  largeDesktop: 4  // > 1440px
};

const BASE_COLUMN_WIDTH = 350;

export const useResponsiveColumns = (config: ResponsiveConfig = DEFAULT_CONFIG) => {
  const [columnCount, setColumnCount] = useState(config.desktop);
  const [columnWidth, setColumnWidth] = useState(BASE_COLUMN_WIDTH);

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth;
      let newColumnCount: number;
      
      switch (true) {
        case width < 768:
          newColumnCount = config.mobile;
          break;
        case width < 1024:
          newColumnCount = config.tablet;
          break;
        case width < 1440:
          newColumnCount = config.desktop;
          break;
        default:
          newColumnCount = config.largeDesktop;
          break;
      }

      setColumnCount(newColumnCount);

      const availableWidth = window.innerWidth - 56 
      const newWidth = availableWidth / newColumnCount;
      setColumnWidth(newWidth);
    };

    updateResponsiveValues();

    window.addEventListener('resize', updateResponsiveValues);

    return () => window.removeEventListener('resize', updateResponsiveValues);
  }, [config]);

  return {
    columnCount,
    columnWidth,
  };
}; 