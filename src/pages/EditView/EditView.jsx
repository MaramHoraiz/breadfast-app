import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';

import EditForm from '../../components/Form/EditForm';

/**
 * React component to display Edit post page
 * @param {object} formData Post data
 */
const EditView = function (props) {
  const location = useLocation();
  const { Content } = Layout;
  return (
    <Content className='posts_container'>
    {location.state && (<EditForm formData={location.state.data} />)}
      {' '}
    </Content>
  );
};

export default EditView;
