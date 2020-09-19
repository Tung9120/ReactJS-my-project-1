import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
};

class FormGetCumstomerInfor extends Component {

  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  componentDidUpdate(){
    this.formRef.current.resetFields();
  }

  render() {
    return (
      <>
        <Form
          ref={this.formRef}
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input type="tel" />
          </Form.Item>
          <Form.Item
            name={["user", "adress"]}
            label="Adress"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default FormGetCumstomerInfor;
