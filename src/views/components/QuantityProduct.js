import React, { Component } from "react";
import { InputNumber } from "antd";

class QuantityProduct extends Component {

  // componentDidMount(){
  //   const { product } = this.props;
  //   console.log('total', product.price * product.quantity);
  // }

  onChange = (value) => {
    console.log(this.props);
    const {product} = this.props;
    console.log("total", value * product.price);
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
