import React, { Component } from "react";
import { Col, Typography, Empty, Card, Button, Pagination } from "antd";
import { connect } from "react-redux";
import { addToCart } from "../../actions/userActions";
import { withRouter } from "react-router";
import "./TopNew.css";

const { Title } = Typography;

class Products extends Component {
  state = {
    current: 1,
  };

  onChange = (page) => {
    this.setState({
      current: page,
    });
    this.props.history.push("/products/page/" + page);
  };

  addToCart = (item, i) => {
    const { addToCart, productsSelect } = this.props;
    return (e) => {
      // console.log("item", item);
      // console.log("productData[i]", productsSelect[i]);
      // console.log("i", i);
      const productInCart = {
        key: item.key,
        avatar: item.avatar,
        name: item.name,
        price: item.price,
        quantity: 1,
        // product: { ...item },
      };
      console.log("productInCart", productInCart);
      addToCart(productInCart);
    };
  };

  render() {
    const {
      products,
      productsSelect,
      searchProductText,
      tempProducts,
    } = this.props;
    const productData = JSON.parse(products) || [];
    const perPage = 4;
    const totalPage = Math.ceil(productData.length / perPage);
    const indexOfLastProducts = this.state.current * perPage;
    const indexOfFirstProducts = indexOfLastProducts - perPage;
    const currentProducts = productData.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );

    const currentProductsFilter = productsSelect.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );

    if (productData === null) {
      return (
        <div>
          <Title level={3} align="center">
            Products
          </Title>
          <Empty />
        </div>
      );
    } else {
      return (
        <>
          {productData.length === 0 && productsSelect.length === 0 && (
            <div>
              <Title level={3} align="center">
                Products
              </Title>
              <Empty />
            </div>
          )}

          {productData.length > 0 &&
            productsSelect.length === 0 &&
            (searchProductText === "" || searchProductText === null) && (
              <>
                <Col span={24}>
                  <Title level={3} align="center">
                    Products
                  </Title>
                </Col>
                {currentProducts.map((item, i) => (
                  <Col span={5} className="col mb-1" key={i}>
                    <Card hoverable>
                      <img src={item.avatar} alt="?" className="w-100" />
                      <p className="text-center bold mt-1">{item.name}</p>
                      <Title
                        level={4}
                        className="text-center bold mt-1"
                        style={{
                          color: "#524dda",
                        }}
                      >
                        ${item.price}
                      </Title>
                      <Button
                        className="d-block mx-auto mb-1"
                        type="primary"
                        disabled={
                          tempProducts.length > 0 &&
                          tempProducts[i].inventory === 0
                        }
                        onClick={this.addToCart(item, i)}
                      >
                        Add to Cart
                      </Button>
                    </Card>
                  </Col>
                ))}
                <Col span={24} className="d-flex justify-content-center mt-2">
                  <Pagination
                    current={this.state.current}
                    onChange={this.onChange}
                    defaultPageSize={perPage}
                    total={productData.length}
                    showTotal={(total) => `Total ${totalPage} pages`}
                  />
                </Col>
              </>
            )}

          {productsSelect.length > 0 && searchProductText !== "" && (
            <>
              <Col span={24}>
                <Title level={3} align="center">
                  Products
                </Title>
              </Col>
              {currentProductsFilter.map((item, i) => (
                <Col span={5} className="col mb-1" key={i}>
                  <Card hoverable>
                    <img src={item.avatar} alt="?" className="w-100" />
                    <p className="text-center bold mt-1">{item.name}</p>
                    <Title
                      level={4}
                      className="text-center bold mt-1"
                      style={{
                        color: "#524dda",
                      }}
                    >
                      ${item.price}
                    </Title>
                    <Button
                      className="d-block mx-auto mb-1"
                      type="primary"
                      disabled={item.inventory === 0}
                      onClick={this.addToCart(item, i)}
                    >
                      Add to Cart
                    </Button>
                  </Card>
                </Col>
              ))}
              <Col span={24} className="d-flex justify-content-center mt-2">
                <Pagination
                  current={this.state.current}
                  onChange={this.onChange}
                  defaultPageSize={perPage}
                  total={productsSelect.length}
                  showTotal={(total) => `Total ${totalPage} pages`}
                />
              </Col>
            </>
          )}

          {productData.length > 0 &&
            productsSelect.length === 0 &&
            searchProductText !== "" && (
              <div>
                <Title level={3} align="center">
                  Products
                </Title>
                <Empty />
              </div>
            )}
        </>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    productsSelect: state.user.productsSelect,
    searchProductText: state.user.searchProductText,
    cart: state.user.cart,
    tempProducts: state.user.tempProducts,
  };
}

export default withRouter(connect(mapStateToProps, { addToCart })(Products));
