import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";
import { connect } from "react-redux";
import { addTopCards } from "../../actions/userActions";

const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
};

class CardsTopMng extends Component {

  onFinish = (values) => {
    const cards = Object.values(values.cards);
    this.props.addTopCards(cards);
  };

  render() {
    const { topCards } = this.props;
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
            initialValue={topCards[0] ? topCards[0] : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["cards", "card2"]}
            label="Name card 2"
            rules={[{ required: true }]}
            initialValue={topCards[1] ? topCards[1] : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["cards", "card3"]}
            label="Name card 3"
            rules={[{ required: true }]}
            initialValue={topCards[2] ? topCards[2] : ""}
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

function mapStateToProps(state) {
  return {
    topCards: state.user.topCards,
  };
}

export default connect(mapStateToProps, { addTopCards })(CardsTopMng);
