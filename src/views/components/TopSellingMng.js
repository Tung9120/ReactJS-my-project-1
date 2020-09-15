import React, { Component, Suspense } from "react";
import { Table, Tag, Typography, Spin, Modal, Button, Space } from "antd";
import { connect } from "react-redux";
import { addTopSelling } from "../../actions/userActions";

const TopSellingPreview = React.lazy(() => import("./TopSellingPreview.js"));

const { Title, Text } = Typography;

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
];

class TopSellingMng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: this.props.topSelling,
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  onSelectChange = (selectedRowKeys) => {
    if (selectedRowKeys.length > 4) {
      selectedRowKeys = [
        selectedRowKeys[selectedRowKeys.length - 4],
        selectedRowKeys[selectedRowKeys.length - 3],
        selectedRowKeys[selectedRowKeys.length - 2],
        selectedRowKeys[selectedRowKeys.length - 1],
      ];
      this.props.addTopSelling(selectedRowKeys);
      this.setState({ selectedRowKeys });
      return;
    }
    this.props.addTopSelling(selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const { products, topSelling } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <>
        <Suspense fallback={<Spin />}>
          <Title level={3} style={{ textAlign: "center" }}>
            Manage Top Selling
          </Title>
          <Button
            className="my-1"
            type="primary"
            onClick={this.showModal}
            disabled={topSelling.length < 4}
          >
            Top Selling Preview
          </Button>
          <Modal
            title="Carousel preview"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <TopSellingPreview />
          </Modal>
        </Suspense>
        <br />
        {topSelling.length === 4 ? (
          ""
        ) : (
          <Space direction="vertical">
            <Text mark>Warning: The top selling not enough items</Text>
            <Text mark>Note: The top selling contains up to 4 items</Text>
          </Space>
        )}
        <Title level={4}>Product list</Title>
        <Table
          pagination={{ defaultPageSize: 4 }}
          rowSelection={rowSelection}
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
    topSelling: state.user.topSelling,
  };
}

export default connect(mapStateToProps, { addTopSelling })(TopSellingMng);
