import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const ViewRenderer = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onClick = () => {
    setModalVisible(true);
  };
  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Button icon={<EyeOutlined />} title="View" onClick={onClick}></Button>
      <Modal
        centered
        title="Details"
        visible={modalVisible}
        footer={[
          <Button key="back" onClick={onClose}>
            Ok
          </Button>,
        ]}
        onCancel={onClose}
      >
        <h3>Title: </h3>
        <p>{props?.node?.data?.title}</p>
        <h3>Description: </h3>
        <p>{props?.node?.data?.body}</p>
      </Modal>
    </div>
  );
};

export default ViewRenderer;
