import React, { Component } from "react";
import { Table, Tag, Space, Typography, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar) => <img src={avatar} />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => `$${price}`,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <>
        {status.map((status) => {
          let color = "bestseller" ? "geekblue" : "green";
          if (status === "out of stock") {
            color = "volcano";
          }

          if (status === "new") {
            color = "green";
          }

          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Tooltip title="Edit">
          <Button type="primary">
            <EditOutlined />
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button type="danger">
            <DeleteOutlined />
          </Button>
        </Tooltip>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    avatar: "https://via.placeholder.com/70",
    name: "T-shirt",
    price: 6,
    description: "New York No. 1 Lake Park",
    status: ["new"],
  },
  {
    key: "2",
    avatar: "https://via.placeholder.com/70",
    name: "Jean",
    price: 15,
    description: "London No. 1 Lake Park",
    status: ["out of stock"],
  },
  {
    key: "3",
    avatar: "https://via.placeholder.com/70",
    name: "shirt",
    price: 7,
    description: "Sidney No. 1 Lake Park",
    status: ["bestseller"],
  },
];

class ProductList extends Component {
  render() {
    return (
      <>
        <Typography.Title level={4} align="center">
          Product List
        </Typography.Title>
        <Table columns={columns} dataSource={data} />
      </>
    );
  }
}

export default ProductList;
