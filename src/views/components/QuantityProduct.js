import React, { Component } from "react";
import { InputNumber } from "antd";

class QuantityProduct extends Component {
  onChange = (value) => {
    console.log("changed", value);
  };

  render() {
    const {defaultValue} = this.props
    return (
      <>
        <InputNumber min={1} defaultValue={defaultValue} onChange={this.onChange} />
      </>
    );
  }
}

export default QuantityProduct;
