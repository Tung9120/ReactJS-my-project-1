import React, { Component } from "react";
import { Tooltip, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { removeProduct } from "../../actions/userActions";

class RemoveProductFromCart extends Component {
  onClick = (e) => {
    const { product, removeProduct } = this.props;
    removeProduct(product);
  };

  render() {
    return (
      <>
        <Tooltip title="Remove product">
          <Button type="danger" onClick={this.onClick}>
            <DeleteOutlined />
          </Button>
        </Tooltip>
      </>
    );
  }
}

export default connect(null, { removeProduct })(RemoveProductFromCart);
