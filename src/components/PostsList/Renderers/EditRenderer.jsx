import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';

import { paths } from '../../../constants';

const EditPost = (props) => {
  const history = useHistory();

  const onEditClick = () => {
    history.push(paths.EDIT, {
      data: props.node.data,
    });
  };

  return (
    <div>
      <Button icon={<EditFilled />} title="Edit" onClick={onEditClick}></Button>
    </div>
  );
};

export default EditPost;
