import React, { Component } from "react";
import { Col, notification } from "antd";
import Search from "antd/lib/input/Search";
import { connect } from "react-redux";
import { searchProduct } from "../../actions/userActions";

class SearchProduct extends Component {
  openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  onSearch = (value) => {
    let newValue = value.trim();
    if (newValue === "" && this.props.products.length === 0) {
      this.props.searchProduct(null);
      return;
    }

    this.props.searchProduct(newValue);
  };

  onAlert = (event) => {
    const { products, productsSelect, searchProductText } = this.props;

    if(event.keyCode === 13 && (searchProductText === "" || searchProductText === null) && products.length !== 0){
      this.openNotificationWithIcon("success", "Get all products");
    }

    if (event.keyCode === 13) {
      if (
        products.length > 0 &&
        productsSelect.length === 0 &&
        (searchProductText !== "" || searchProductText === null)
      ) {
        this.openNotificationWithIcon("error", "Product not found");
      }
      if (
        products.length > 0 &&
        productsSelect.length > 0 &&
        (searchProductText !== "" || searchProductText === null)
      ) {
        this.openNotificationWithIcon(
          "success",
          `Found ${productsSelect.length} results`
        );
      }
    }
  };

  render() {
    return (
      <Col span={8} offset={16} className="my-2">
        <Search
          placeholder="Search products"
          onSearch={this.onSearch}
          enterButton
          style={{ verticalAlign: "middle" }}
          onKeyUp={this.onAlert}
        />
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    searchProductText: state.user.searchProductText,
    productsSelect: state.user.productsSelect,
  };
}

export default connect(mapStateToProps, { searchProduct })(SearchProduct);
