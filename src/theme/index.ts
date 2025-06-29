import type { ThemeConfig } from 'antd';

export { useTheme } from './useTheme';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    colorPrimaryHover: '#40a9ff',
    colorPrimaryActive: '#096dd9',
    colorPrimaryBorder: '#91d5ff',
    colorPrimaryBg: '#e6f7ff',
    
    colorSuccess: '#52c41a',
    colorSuccessHover: '#73d13d',
    colorSuccessActive: '#389e0d',
    
    colorWarning: '#faad14',
    colorWarningHover: '#ffc53d',
    colorWarningActive: '#d48806',
    
    colorError: '#ff4d4f',
    colorErrorHover: '#ff7875',
    colorErrorActive: '#d9363e',
    
    colorInfo: '#1890ff',
    colorInfoHover: '#40a9ff',
    colorInfoActive: '#096dd9',
    
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    borderRadiusXS: 4,
    
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeSM: 12,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,
    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,
    
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,
    
    paddingContentHorizontal: 24,
    paddingContentVertical: 16,
    
    lineHeight: 1.5714,
    lineHeightLG: 1.5,
    lineHeightSM: 1.6667,
    
    fontWeightStrong: 600,
    
    motionDurationFast: '0.2s',
    motionDurationMid: '0.3s',
    motionDurationSlow: '0.4s',
    
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  components: {
    Button: {
      borderRadius: 8,
      controlHeight: 40,
      fontSize: 14,
      paddingInline: 16,
      colorBgContainer: '#ffffff',
      colorBorder: '#d9d9d9',
      colorPrimaryHover: '#40a9ff',
      colorPrimaryActive: '#096dd9',
      algorithm: true,
    },
    Input: {
      borderRadius: 8,
      controlHeight: 40,
      fontSize: 14,
      paddingInline: 12,
      colorBgContainer: '#ffffff',
      colorBorder: '#d9d9d9',
      colorPrimaryHover: '#40a9ff',
      colorPrimary: '#1890ff',
      colorPrimaryActive: '#096dd9',
    },
    Card: {
      borderRadius: 12,
      paddingLG: 24,
      padding: 16,
      paddingContentHorizontal: 20,
      paddingContentVertical: 16,
      colorBgContainer: '#ffffff',
      algorithm: true,
    },
  },
  cssVar : true,
}; 