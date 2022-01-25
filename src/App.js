import './App.css';
import { Layout } from 'antd';

import Router from './Router';
import Header from './components/Header/Header';

function App() {
  return (
    <Layout>
      <Header />
      <Router />
    </Layout>
  );
}

export default App;
