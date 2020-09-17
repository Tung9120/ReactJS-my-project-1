import React, { Component } from "react";
import { Typography, Row, Col, Card, Button, Empty } from "antd";
import { connect } from "react-redux";
import "./TopSelling.css";

const { Title } = Typography;

class TopSelling extends Component {
  state = {
    topSellingData: [],
  };

  componentDidMount() {
    const { products, topSelling } = this.props;
    let topSellingData = [];
    for (let i = 0; i < topSelling.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (topSelling[i] === products[j].key) {
          topSellingData.push(products[j]);
        }
      }
    }
    this.setState({
      topSellingData,
    });
  }

  render() {
    const { topSellingData } = this.state;

    return (
      <>
        <div className="my-2">
          <h2 className="text-center">
            Top Selling
          </h2>
        </div>
        <Row gutter={16} justify="center" className="TopSelling">
          {topSellingData.length !== 4 ? (
            <Empty />
          ) : (
            topSellingData.map((item, i) => (
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
        </Row>
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

export default connect(mapStateToProps)(TopSelling);
