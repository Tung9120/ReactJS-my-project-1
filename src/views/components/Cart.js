import React, { Component } from 'react'
import { Table, Tag, Space, Typography } from 'antd';

const {Title, Text} = Typography;

const columns = [
  {
    title: 'Product name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => (
      "$" + text
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    name: 'A',
    quantity: 1,
    price: 3,
  }
];

class Cart extends Component {
  render() {
    return (
      <>
        <Table columns={columns} dataSource={data} />
        <Title level={3} type="mark" align="center"><Text underline>Total: </Text><Text type="danger">$300</Text></Title>
      </>
    )
  }
}

export default Cart;





