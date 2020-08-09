import React, { Component } from "react";
import { Table, Space, Typography, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone number",
    dataIndex: "phone",
    key: "phone",
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
    name: "John Brown",
    email: "admin@gmail.com",
    phone: "0123456789",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: "admin@gmail.com",
    phone: "0123456789",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    email: "admin@gmail.com",
    phone: "0123456789",
    tags: ["cool", "teacher"],
  },
];

export default class AdminList extends Component {
  render() {
    return (
      <>
        <Typography.Title level={4} align="center">
          Admin List
        </Typography.Title>
        <Table columns={columns} dataSource={data} />
      </>
    );
  }
}
