import React, { Component } from "react";
import { Table, Space, Typography, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

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

// const data = [
//   {
//     key: "1",
//     avatar: "https://via.placeholder.com/70",
//     name: "John Brown",
//     email: "admin@gmail.com",
//     phone: "0123456789",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     avatar: "https://via.placeholder.com/70",
//     name: "Jim Green",
//     email: "admin@gmail.com",
//     phone: "0123456789",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     avatar: "https://via.placeholder.com/70",
//     name: "Joe Black",
//     email: "admin@gmail.com",
//     phone: "0123456789",
//     tags: ["cool", "teacher"],
//   },
// ];

class AdminList extends Component {
  render() {
    return (
      <>
        <Typography.Title level={4} align="center">
          Admin List
        </Typography.Title>
        <Table columns={columns} dataSource={this.props.admins} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    admins: state.user.admins,
  };
}

export default connect(mapStateToProps)(AdminList);
