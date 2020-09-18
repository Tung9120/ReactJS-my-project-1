import React, { Component, Suspense } from "react";
import { Table, Space, Typography, Spin, Button } from "antd";
import {
  DeleteOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const QuantityProduct = React.lazy(() => import("./QuantityProduct"));

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
    render: (text, record) => <img alt="?" src={record.avatar} />
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text, record) => <QuantityProduct defaultValue={record.quantity} />,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => "$" + text,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button type="danger">
        <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    id: 1,
    name: "A",
    avatar: "https://via.placeholder.com/64",
    quantity: 1,
    price: 3,
  },
];

class Cart extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Spin />}>
          <Table columns={columns} dataSource={data} />
          <Title level={3} type="mark" align="center">
            <Text underline>Total: </Text>
            <Text type="danger">$300</Text>
          </Title>
          <Title align="center" style={{marginTop: "0"}}>
          <Button type="primary">Order</Button></Title>
        </Suspense>
      </>
    );
  }
}

export default Cart;
