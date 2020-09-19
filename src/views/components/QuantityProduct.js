import React, { Component } from "react";
import { InputNumber } from "antd";
import { connect } from "react-redux";
import { changeQuantity } from "../../actions/userActions";

class QuantityProduct extends Component {
  onChange = (value) => {
    const { product, changeQuantity } = this.props;
    product.quantity = value;
    changeQuantity(product);
  };

  render() {
    const { defaultValue } = this.props;
    return (
      <>
        <InputNumber
          min={0}
          defaultValue={defaultValue}
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default connect(null, { changeQuantity })(QuantityProduct);
