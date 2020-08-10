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
