import React, { Component, Suspense } from "react";
import { Table, Space, Typography, Spin, Empty } from "antd";
import { connect } from "react-redux";

const { Title, Text } = Typography;
const QuantityProduct = React.lazy(() => import("./QuantityProduct"));
const RemoveProductFromCart = React.lazy(() =>
  import("./RemoveProductFromCart")
);
const ModalGetCumstomerInfor = React.lazy(() => import("./ModalGetCustomerInfor"))

const columns = [
  {
    title: "Product name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (text, record) => <img alt="?" src={record.avatar} />,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text, record) => (
      <QuantityProduct defaultValue={record.quantity} product={record} />
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text, record) => "$" + record.price * record.quantity,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <RemoveProductFromCart product={record} />
      </Space>
    ),
  },
];

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

    return (
      <>
        <Title level={3} align="center">
          Cart
        </Title>
        <Suspense fallback={<Spin />}>
          {cart.length === 0 ? (
            <Empty />
          ) : (
            <Table columns={columns} dataSource={cart} />
          )}
          {cart.length === 0 ? (
            ""
          ) : (
            <>
              <Title level={3} type="mark" align="center">
                <Text underline>Total: </Text>
                <Text type="danger">${total}</Text>
              </Title>
              <Title align="center" style={{ marginTop: "0" }}>
                <ModalGetCumstomerInfor />
              </Title>
            </>
          )}
        </Suspense>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.user.cart,
  };
}

export default connect(mapStateToProps)(Cart);
