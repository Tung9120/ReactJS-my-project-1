import React, { Component, Suspense } from "react";
import { Table, Tag, Typography, Spin, Modal, Button, Space } from "antd";
import { connect } from "react-redux";
import { addTopNew } from "../../actions/userActions";

const TopNewPreview = React.lazy(() => import("./TopNewPreview.js"));

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

class TopNewMng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
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
        selectedRowKeys[selectedRowKeys.length - 1],
        selectedRowKeys[selectedRowKeys.length - 2],
        selectedRowKeys[selectedRowKeys.length - 3],
        selectedRowKeys[selectedRowKeys.length - 4],
      ];
      this.props.addTopNew(selectedRowKeys);
      this.setState({ selectedRowKeys });
      return;
    }
    this.props.addTopNew(selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  componentDidMount = (e) => {
    const { products, topNew } = this.props;
    const productData = JSON.parse(products);
    const topNewData = JSON.parse(topNew);

    if (
      productData === null ||
      productData.length < 4 ||
      topNewData === null ||
      topNewData.length < 4
    ) {
      this.setState({ selectedRowKeys: [] });
      return;
    }

    let itemsSelected = [];

    for (let i = 0; i < productData.length; i++) {
      for (let j = 0; j < topNewData.length; j++) {
        if (productData[i].key === topNewData[j]) {
          itemsSelected.push(topNewData[j]);
        }
      }
    }
    this.setState({ selectedRowKeys: itemsSelected });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const { products } = this.props;
    const productData = JSON.parse(products);
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <>
        <Suspense fallback={<Spin />}>
          <Title level={3} style={{ textAlign: "center" }}>
            Manage Top New
          </Title>
          <Button
            className="my-1"
            type="primary"
            onClick={this.showModal}
            disabled={
              selectedRowKeys === undefined ||
              selectedRowKeys === null ||
              selectedRowKeys.length < 4
            }
          >
            Top New Preview
          </Button>
          <Modal
            title="topNew preview"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <TopNewPreview />
          </Modal>
        </Suspense>
        <br />
        {selectedRowKeys === undefined ||
        selectedRowKeys === null ||
        selectedRowKeys.length < 4 ? (
          <Space direction="vertical">
            <Text mark>Warning: The top new not enough items</Text>
            <Text mark>Note: The top new contains up to 4 items</Text>
          </Space>
        ) : (
          ""
        )}
        <Title level={4}>Product list</Title>
        <Table
          pagination={{ defaultPageSize: 4 }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={productData}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    topNew: state.user.topNew,
  };
}

export default connect(mapStateToProps, { addTopNew })(TopNewMng);
