import React, { Component } from "react";
import { Table, Space, Typography, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar) => <img src={avatar} alt="?" />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone number",
    dataIndex: "phonenumber",
    key: "phonenumber",
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
    const { admins } = this.props;
    return (
      <>
        <Typography.Title level={4} align="center">
          Admin List
        </Typography.Title>
        <Table pagination={{defaultPageSize: 4}} columns={columns} dataSource={admins} />
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
