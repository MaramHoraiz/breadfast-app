import { Form, Input, Button, Card, message } from 'antd';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import './style.css';
import { paths } from '../../constants';

import { editPostActionWatcher } from '../../store/actionsCreators/session';

// constants
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};
let DTO = {};

/**
 * React component to display Edit form
 * @param {object} formData Post data
 */
const EditForm = function ({ formData, editPostActionWatcher }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    DTO = { ...formData };
    onFill(formData);
  }, [formData]);

  /**
   * on submit fn to dispatch edit action to call BE
   * @param {object} form values
   */
  const onFinish = ({ body, title }) => {
    if (validateForm({ body, title })) {
      DTO = { ...DTO, body, title };
      dispatch(
        editPostActionWatcher(
          DTO,
          (data) => {
            message.success(`Post is updated`);
            history.push(paths.APP_ROOT, {});
          },
          () => {
            message.error(`Couldn't Edit Post`);
          }
        )
      );
    } else {
      message.error(`No data has been updated`);
    }
  };

  /**
   * on reset btn clicked to clear form
   * @param {object} form values
   */
  const onReset = () => {
    form.resetFields();
  };

  /**
   * on submit fn to dispatch edit action to call BE
   * @param {object} form values
   */
  const onFill = (values) => {
    form.setFieldsValue({
      ...values,
    });
  };

  /**
   * validate form dat is changed before calling BR to Update
   * @param {object} formData
   */
  const validateForm = (formData) => {
    if (DTO?.body === formData.body && DTO?.title === formData.title) {
      return false;
    }
    return true;
  };

  return (
    <Card title="Edit Post" style={{ height: 'inherit' }}>
      <Form
        form={form}
        {...layout}
        name="control-ref"
        onFinish={onFinish}
        className="edit-form"
      >
        <Form.Item
          className="formRow"
          name="title"
          label="Product"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={'body'} label="Description" className="formRow">
          <Input.TextArea style={{ height: '15vh' }} />
        </Form.Item>
        <Form.Item {...tailLayout} className="formRow">
          <Button type="primary" htmlType="submit" className="button-width">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} className="button-width">
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
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
      editPostActionWatcher,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
