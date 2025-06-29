import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from 'antd';

import { AppRoutes } from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import { useTheme } from '@/theme';

import './app.css'

const { Content } = Layout;

const App = () => {
  const token = useTheme();
  
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: `0 ${token.paddingLG}`, margin: token.marginLG }}>
          <AppRoutes />
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App; 