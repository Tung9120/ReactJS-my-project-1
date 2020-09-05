import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";
import { connect } from "react-redux";

const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class CardsTopMng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
    };
  }

  // onFieldsChange = (changedFields, allFields) => {
  //   console.log(changedFields, allFields);
  // }

  onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };

  onFinish = (values) => {
    console.log(values);
    const cards = Object.values(values.cards);
    console.log(cards);
  };

  render() {
    return (
      <>
        <Title level={3}>Manage cards on top</Title>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["cards", "card1"]}
            label="Name card 1"
            rules={[{ required: true }]}
            initialValue="a"
          >
            <Input defaultValue="a" value="d" />
          </Form.Item>
          <Form.Item
            name={["cards", "card2"]}
            label="Name card 2"
            rules={[{ required: true }]}
            initialValue="b"
          >
            <Input defaultValue="b" />
          </Form.Item>
          <Form.Item
            name={["cards", "card3"]}
            label="Name card 3"
            rules={[{ required: true }]}
            initialValue="c"
          >
            <Input defaultValue="c" />
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

export default connect()(CardsTopMng);
