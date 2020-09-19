import React, { Component } from "react";
import { Tooltip, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

class RemoveProductFromCart extends Component {
  onClick = (e) => {
    const { product } = this.props;
    console.log(product);
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

export default RemoveProductFromCart;
