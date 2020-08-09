import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    select: "${label} is not validate select!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class AddProduct extends Component {
  onFinish = (values) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Typography.Title level={4} align="center">
          Add admin
        </Typography.Title>
        <Form
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
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phonenumber"]}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default AddProduct;
