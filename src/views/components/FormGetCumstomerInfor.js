import React, { Component } from "react";
import { Form, Input, Button, notification } from "antd";
import { connect } from "react-redux";
import { order } from "../../actions/userActions";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
};

class FormGetCumstomerInfor extends Component {
  formRef = React.createRef();

  onReset = () => {
    this.formRef.current.resetFields();
  };

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Order Success",
    });
  };

  onFinish = (values) => {
    const { cart, order, bills } = this.props;
    const { name, phone, address } = values.user;
    const billData = JSON.parse(bills);
    const bill = {
      billId:
        (billData === null || billData.length === 0)
          ? "BILL" + 0
          : "BILL" + (billData[0].key + 1),
      key: (billData === null || billData.length === 0) ? 0 : billData[0].key + 1,
      name,
      phone,
      address,
      cart: [...cart],
      total: cart.reduce((a, b) => a + b.price * b.quantity, 0),
      status: ["pending"],
    };
    
    order(bill);
    this.openNotificationWithIcon("success");
  };

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
            name={["user", "address"]}
            label="Address"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={this.onReset} className="mx-1">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.user.cart,
    bills: state.user.bills,
  };
}

export default connect(mapStateToProps, { order })(FormGetCumstomerInfor);
