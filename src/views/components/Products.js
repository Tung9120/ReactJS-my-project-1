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
    console.log(page);
    this.setState({
      current: page,
    });
    this.props.history.push("/products/page/" + page);
  };

  addToCart = (item) => {
    const { cart, addToCart } = this.props;

    return (e) => {
      const productInCart = {
        product: { ...item },
        key: cart.length === 0 ? 0 : cart[cart.length - 1].key + 1,
        name: item.name,
        avatar: item.avatar,
        quantity: 1,
        price: item.price,
      };

      addToCart(productInCart);
    };
  };

  render() {
    const { products, productsSelect, searchProductText } = this.props;
    const productData = JSON.parse(products);
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
          {productData.length > 0 &&
            productsSelect.length > 0 &&
            searchProductText === "" &&
            searchProductText === null && (
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
                        onClick={this.addToCart(item)}
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

          {productData.length > 0 &&
            productsSelect.length === 0 &&
            searchProductText !== "" && (
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
                        onClick={this.addToCart(item)}
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
            searchProductText === "" && (
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
                        onClick={this.addToCart(item)}
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
                      onClick={this.addToCart(item)}
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
            searchProductText !== "" &&
            ""}
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
  };
}

export default withRouter(connect(mapStateToProps, { addToCart })(Products));
