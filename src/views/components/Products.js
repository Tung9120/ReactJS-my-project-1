import React, { Component } from "react";
import { Col, Typography, Empty, Card, Button } from "antd";
import { connect } from "react-redux";
import { addToCart } from "../../actions/userActions";
import "./TopNew.css";

const { Title } = Typography;

class Products extends Component {
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

    return (
      <>
        {productData.length > 0 &&
          productsSelect.length > 0 &&
          searchProductText === "" && (
            <>
              <Col span={24}>
                <Title level={3} align="center">
                  Products
                </Title>
              </Col>
              {productData.map((item, i) => (
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
              {productData.map((item, i) => (
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
              {productData.map((item, i) => (
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
            </>
          )}

        {productsSelect.length > 0 && searchProductText !== "" && (
          <>
            <Col span={24}>
              <Title level={3} align="center">
                Products
              </Title>
            </Col>
            {productsSelect.map((item, i) => (
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

function mapStateToProps(state) {
  return {
    products: state.user.products,
    productsSelect: state.user.productsSelect,
    searchProductText: state.user.searchProductText,
    cart: state.user.cart,
  };
}

export default connect(mapStateToProps, { addToCart })(Products);
