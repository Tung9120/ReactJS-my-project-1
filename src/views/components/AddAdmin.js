import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";
import { addAdmin } from "../../actions/userActions";
import { connect } from "react-redux";

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
    const {admins} = this.props;
    const newAdmin = {key: admins.length,avatar: "https://via.placeholder.com/70", ...values.admin };
    this.props.addAdmin(newAdmin);
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
            name={["admin", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["admin", "email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["admin", "phonenumber"]}
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

function mapStateToProps(state){
  return{
    admins: state.user.admins
  }
}

export default connect(mapStateToProps, { addAdmin })(AddProduct);
