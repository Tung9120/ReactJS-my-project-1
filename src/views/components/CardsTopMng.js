import React, { Component, Suspense } from "react";
import { Form, Input, Button, Typography, Spin } from "antd";
import { connect } from "react-redux";
import { addTopCards } from "../../actions/userActions";

const TopCardsPreview = React.lazy(() => import("./TopCardsPreview"));
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
    let topCardData = JSON.parse(topCards);

    return (
      <>
        <Title level={3} align="center">Manage cards on top</Title>
        <Suspense fallback={<Spin />}>
          <TopCardsPreview />
        </Suspense>
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
            initialValue={topCardData !== null && topCardData[0] ? topCardData !== null && topCardData[0] : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["cards", "card2"]}
            label="Name card 2"
            rules={[{ required: true }]}
            initialValue={topCardData !== null && topCardData[1] ? topCardData !== null && topCardData[1] : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["cards", "card3"]}
            label="Name card 3"
            rules={[{ required: true }]}
            initialValue={topCardData !== null && topCardData[2] ? topCardData !== null && topCardData[2] : ""}
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
