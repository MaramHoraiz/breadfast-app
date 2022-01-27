import './style.css';
import { Layout, Menu } from 'antd';
import { paths } from '../../constants';
import { ReactComponent as Logo } from '../../assets/SVG/breadfast-brand.svg';
import { useHistory } from 'react-router-dom';

function App() {
  const { Header } = Layout;
  const history = useHistory();
  const onTabSelect = ({ key }) => {
    history.replace(key);
  };
  const goHome = () => {
    history.replace('/');
  };
  return (
    <Header style={{ height: '8vh' }}>
      {' '}
      <Logo className="logo" onClick={goHome}/>
      <Menu
        style={{
          width: 'Calc(100% - 200px)',
          backgroundColor: 'transparent',
          height: 'inherit',
        }}
        mode="horizontal"
        defaultSelectedKeys={[paths.APP_ROOT]}
      >
        <Menu.Item onClick={onTabSelect} key={paths.APP_ROOT}>
          Products
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default App;
