import React, { Component } from "react";
import {
  Modal,
  Button,
  Typography,
  Tooltip,
  message
} from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/userActions";

const { Title } = Typography;

class FormDeleteProduct extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  success = () => {
    message.success('product has been deleted');
  };

  onOk = (e) => {
    const {product, deleteProduct} = this.props;
    deleteProduct(product);
    this.hideModal();
    this.success();
  }

  render() {
    const { product } = this.props;
    return (
      <>
        <Tooltip title="Edit">
          <Button type="danger" onClick={this.showModal}>
            <DeleteOutlined />
          </Button>
        </Tooltip>
        <Modal
          title={`Delete product: ${product.name}`}
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Delete"
          okType="danger"
          cancelText="Cancel"
          onOk={this.onOk}
        >
          <Title level={3} type="warning">
            <ExclamationCircleOutlined />
          </Title>
          <span>Are you sure delete this product?</span>
          <p>{product.name}</p>
        </Modal>
      </>
    );
  }
}

export default connect(
  null, {
    deleteProduct
  }
)(FormDeleteProduct);
