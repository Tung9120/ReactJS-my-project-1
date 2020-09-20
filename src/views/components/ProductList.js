import React, { Component, Suspense } from "react";
import { Table, Tag, Space, Typography, Spin } from "antd";
import { connect } from "react-redux";

const FormEditProduct = React.lazy(() => import("./FormEditProduct"));
const FormDeleteProduct = React.lazy(() => import("./FormDeleteProduct"));

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
          let color;

          if (status === "bestseller") {
            color = "geekblue";
          }

          if (status === "out-of-stock") {
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
      <Suspense fallback={<Spin />}>
        <Space size="middle">
          <FormEditProduct product={record} />
          <FormDeleteProduct product={record} />
        </Space>
      </Suspense>
    ),
  },
];

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <>
        <Typography.Title level={3} align="center">
          Product List
        </Typography.Title>
        <Table
          pagination={{ defaultPageSize: 4 }}
          columns={columns}
          dataSource={products}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
  };
}

export default connect(mapStateToProps)(ProductList);
