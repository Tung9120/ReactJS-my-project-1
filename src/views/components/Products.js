import React, { Component } from "react";
import { Col, Typography, Empty, Card, Button } from "antd";
import { connect } from "react-redux";
import "./TopNew.css";

const { Title } = Typography;

class Products extends Component {

  render() {
    const { products, productsSelect, searchProductText } = this.props;
    return (
      <>
        {products.length > 0 &&
          productsSelect.length > 0 &&
          searchProductText === "" &&
          products.map((item, i) => (
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
                <Button className="d-block mx-auto mb-1" type="primary">
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}

        {products.length > 0 &&
          productsSelect.length === 0 &&
          searchProductText !== "" &&
          products.map((item, i) => (
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
                <Button className="d-block mx-auto mb-1" type="primary">
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}

        {products.length === 0 && productsSelect.length === 0 && (
          <div className="my-2">
            <Title level={2} align="center">
              Products
            </Title>
            <Empty />
          </div>
        )}

        {products.length > 0 &&
          productsSelect.length === 0 &&
          searchProductText === "" &&
          products.map((item, i) => (
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
                <Button className="d-block mx-auto mb-1" type="primary">
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}

        {productsSelect.length > 0 &&
          searchProductText !== "" &&
          productsSelect.map((item, i) => (
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
                <Button className="d-block mx-auto mb-1" type="primary">
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}

        {products.length > 0 &&
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
  };
}

export default connect(mapStateToProps)(Products);
