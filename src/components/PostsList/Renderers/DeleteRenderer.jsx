import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { useState } from 'react';

import { Button, Popconfirm, message } from 'antd';
import { DeleteFilled, QuestionCircleOutlined } from '@ant-design/icons';

import { deletePostActionWatcher } from '../../../store/actionsCreators/session';

const DeletePost = (props) => {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showPopConfirm = () => {
    setVisible(true);
  };

  const confirm = () => {
    new Promise((resolve, reject) => {
      setConfirmLoading(true);
      dispatch(
        deletePostActionWatcher(
          props.node.data.id,
          (data) => {
            setVisible(false);
            setConfirmLoading(false);
            message.success(
              `Post with title "${props.node.data.title}" is removed`
            );
            resolve();
          },
          () => {
            setVisible(false);
            setConfirmLoading(false);
            message.error(
              `Couldn't delete Post with title "${props.node.data.title}"`
            );
            reject();
          }
        )
      );
      setTimeout(() => resolve(), 3000);
    });
  };

  return (
    <Popconfirm
      title="Are you sure to Delete post?"
      onConfirm={confirm}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      okButtonProps={{ loading: confirmLoading }}
      visible={visible}
      onCancel={() => setVisible(false)}
    >
      <Button
        icon={<DeleteFilled />}
        title="Delete"
        onClick={showPopConfirm}
      ></Button>
    </Popconfirm>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.session.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deletePostActionWatcher,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
