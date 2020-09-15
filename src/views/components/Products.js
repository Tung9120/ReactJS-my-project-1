import React, { Component } from "react";
import { Col, Typography, Empty, Card, Button } from "antd";
import { connect } from "react-redux";
import "./TopNew.css";

const { Title } = Typography;

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products: this.props.products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        {products.length === 0 ? (
          <div className="my-2">
          <Title level={2} align="center">
            Products
          </Title>
          <Empty />
        </div>
        ) : (
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
          ))
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
  };
}

export default connect(mapStateToProps)(Products);
