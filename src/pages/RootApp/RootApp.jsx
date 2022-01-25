import { Layout } from 'antd';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../components/common/Loading/Loading';
import PostsList from '../../components/PostsList/PostsList';

import { fetchPostsActionWatcher } from '../../store/actionsCreators/session';

/**
 * React component for main page app
 * it displays the posts list
 * Fetch BE posts data
 */
function RootApp(props) {

  const dispatch = useDispatch();
  const { Content } = Layout;

  useEffect(() => {
   if(props.data.length === 0) dispatch(props.fetchPostsActionWatcher());
  }, []);

  return (
    <Content className='posts_container'>
      {props.data?.length === 0 ? <Loading /> : <PostsList data={props.data} />}
    </Content>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.session.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPostsActionWatcher,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
