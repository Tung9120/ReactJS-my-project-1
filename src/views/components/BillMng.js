import React, { Component } from "react";
import { Table, Tag, Space, Typography, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const { Title } = Typography;

const columns = [
  {
    title: "ID",
    dataIndex: "billId",
    key: "billId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (value) => `$${value}`,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <>
        {status.map((item) => {
          let color;

          if (item === "pending") {
            color = "#fadb14";
          }

          if (status === "fail") {
            color = "volcano";
          }

          if (status === "success") {
            color = "green";
          }

          return (
            <Tag
              color={color}
              key={item}
              style={{ color: item === "pending" ? "#444" : "#fff" }}
            >
              {item.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Handling",
    key: "handling",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">
          <CheckOutlined />
        </Button>
        <Button type="danger">
          <CloseOutlined />
        </Button>
      </Space>
    ),
  },
];

class BillMng extends Component {
  render() {
    const { bills } = this.props;
    return (
      <>
        <Title level={3} align="center">
          Bills
        </Title>
        <Table columns={columns} dataSource={bills} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    bills: state.user.bills,
  };
}

export default connect(mapStateToProps)(BillMng);
