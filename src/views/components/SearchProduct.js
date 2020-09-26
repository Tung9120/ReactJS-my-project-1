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

  onSearch = (value, event) => {
    const { products, productsSelect, searchProductText } = this.props;
    const productData = JSON.parse(products);
    let newValue = value.trim();
    if ((newValue === "" || newValue === null) && productData.length === 0) {
      this.props.searchProduct(null);
      return;
    }

    if (
      (searchProductText === "" || searchProductText === null) &&
      productData.length !== 0 &&
      productsSelect.length === 0
    ) {
      this.openNotificationWithIcon("success", "Get all products");
      return;
    }

    if (
      productData.length !== 0 &&
      productsSelect.length === 0 &&
      (searchProductText !== "" || searchProductText !== null)
    ) {
      this.openNotificationWithIcon("error", "Product not found");
    }

    if (
      productData.length > 0 &&
      productsSelect.length > 0 &&
      (searchProductText !== "" || searchProductText !== null)
    ) {
      this.openNotificationWithIcon(
        "success",
        `Found ${productsSelect.length} results`
      );
    }
  };

  onChange = (e) => {
    const { products } = this.props;
    const productData = JSON.parse(products);
    let newValue = e.target.value.trim();
    if ((newValue === "" || newValue === null) && productData.length === 0) {
      this.props.searchProduct(null);
      return;
    }

    this.props.searchProduct(newValue);
  };

  render() {
    const { products, searchProductText } = this.props;
    const productData = JSON.parse(products);

    return (
      <>
        {productData === null || productData.length === 0 ? (
          ""
        ) : (
          <Col
            span={8}
            offset={16}
            lg={{ span: 8, offset: 16 }}
            sm={{ span: 10, offset: 14 }}
            xs={{ span: 24, offset: 0 }}
            className="my-2"
          >
            <Search
              placeholder="Search products"
              onSearch={this.onSearch}
              onChange={this.onChange}
              enterButton
              defaultValue={searchProductText}
              style={{ verticalAlign: "middle" }}
            />
          </Col>
        )}
      </>
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
