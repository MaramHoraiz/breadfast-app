import './style.css';
import { Layout, Menu } from 'antd';
import config from '../../config.json';
import { ReactComponent as Logo } from '../../assets/SVG/breadfast-brand.svg';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [key, setKey] = useState(config.APP_ROOT);
  const { Header } = Layout;
  const history = useHistory();
  const onTabSelect = ({ key }) => {
    setKey(key);
  };
  // useEffect(() => {
  //   if (key){
  //     history.replace(key);
  //   }
  // }, [key]);
  return (
    <Header style={{ height: '8vh' }}>
      {' '}
      <Logo className="logo" />
      <Menu
        onSelect={onTabSelect}
        style={{
          width: 'Calc(100% - 200px)',
          backgroundColor: 'transparent',
          height: 'inherit',
        }}
        mode="horizontal"
        defaultSelectedKeys={[config.APP_ROOT]}
      >
        <Menu.Item key={config.APP_ROOT}><Link to={config.APP_ROOT}>Products</Link></Menu.Item>
        <Menu.Item key={config.EDIT}><Link to={config.EDIT}>Details</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default App;
