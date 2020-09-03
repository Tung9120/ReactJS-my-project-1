import React, { Component, Suspense } from "react";
import { Table, Tag, Typography, Spin, Modal, Button } from "antd";
import { connect } from "react-redux";
import { addCarousel } from "../../actions/userActions";

const CarouselPreview = React.lazy(() => import("./CarouselPreview"));

const { Title, Text } = Typography;

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

class CarouselMng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: this.props.carousel,
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
    if (selectedRowKeys.length > 3) {
      selectedRowKeys = [
        selectedRowKeys[selectedRowKeys.length - 3],
        selectedRowKeys[selectedRowKeys.length - 2],
        selectedRowKeys[selectedRowKeys.length - 1],
      ];
      this.props.addCarousel(selectedRowKeys);
      this.setState({ selectedRowKeys });
      return;
    }
    this.props.addCarousel(selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const { products, carousel } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <>
        <Suspense fallback={<Spin />}>
          <Title level={3} style={{ textAlign: "center" }}>
            Manage Carousel
          </Title>
          <Button className="my-1" type="primary" onClick={this.showModal} disabled={carousel.length < 3}>
            Preview
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <CarouselPreview />
          </Modal>
          <br />
            {carousel.length === 3 ? "" : <>
            <Text mark>Warning: The carousel does not contain items</Text><br /><br />
            <Text mark>Note: The carousel contains up to 3 items</Text></>}
          <Title level={4}>Product list</Title>
          <Table
            pagination={{ defaultPageSize: 3 }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={products}
          />
        </Suspense>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    carousel: state.user.carousel,
  };
}

export default connect(mapStateToProps, { addCarousel })(CarouselMng);
