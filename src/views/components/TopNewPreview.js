import React from "react";
import { connect } from "react-redux";
import { Typography, Row, Col, Card, Button, Empty } from "antd";
import "./TopSelling.css";

const { Title } = Typography;

class TopNew extends React.Component {
  render() {
    const { topNew, products } = this.props;

    let productsInTopNew = [];

    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < topNew.length; j++) {
        if (products[i].key === topNew[j]) {
          productsInTopNew.push(products[i]);
        }
      }
    }

    return (
      <>
        <div className="my-2">
          <Title level={3} align="center">
            Top New
          </Title>
          <Title level={4} align="center">
            Cum doctus civibus efficiantur in imperdiet deterruisset
          </Title>
        </div>
        {productsInTopNew.length !== 4 ? (
          <Empty />
        ) : (
          <Row justify="center" className="TopSelling">
            {productsInTopNew.map((product, index) => (
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
    topNew: state.user.topNew,
  };
}

export default connect(mapStateToProps)(TopNew);
