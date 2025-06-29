import { theme as antdTheme } from 'antd';

export const useTheme = () => {
  const { token } = antdTheme.useToken();
  return token;
}; 