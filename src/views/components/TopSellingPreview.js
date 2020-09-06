import React from "react";
import { connect } from "react-redux";
import { Typography, Row, Col, Card, Button, Empty } from "antd";
import "./TopSelling.css";

const { Title } = Typography;

class TopSellingPreview extends React.Component {
  render() {
    const { topSelling, products } = this.props;

    let productsInTopSelling = [];

    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < topSelling.length; j++) {
        if (products[i].key === topSelling[j]) {
          productsInTopSelling.push(products[i]);
        }
      }
    }
    console.log(productsInTopSelling)

    return (
      <>
        <div className="my-2">
          <Title level={3} align="center">
            Top Selling
          </Title>
          <Title level={4} align="center">
            Cum doctus civibus efficiantur in imperdiet deterruisset
          </Title>
        </div>
        {productsInTopSelling.length !== 4 ? (
          <Empty />
        ) : (
          <Row justify="center" className="TopSelling">
            {productsInTopSelling.map((product, index) => (
              <Col span={6} className="col mb-1" key={index}>
                <Card hoverable>
                  <img
                    src={product.avatar}
                    alt="?"
                    className="w-100"
                  />
                  <p className="text-center bold mt-1">{product.name}</p>
                  <Title
                    level={4}
                    className="text-center bold mt-1"
                    style={{
                      color: "#524dda",
                    }}
                  >
                    ${product.price}
                  </Title>
                  <Button className="d-block mx-auto mb-1" type="primary">
                    Add to Cart
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    topSelling: state.user.topSelling,
  };
}

export default connect(mapStateToProps)(TopSellingPreview);
