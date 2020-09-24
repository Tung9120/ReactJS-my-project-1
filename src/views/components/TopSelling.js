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
    const productData = JSON.parse(products);
    const topSellingStorage = JSON.parse(topSelling);

    let topSellingData = [];
    for (let i = 0; i < topSellingStorage.length; i++) {
      for (let j = 0; j < productData.length; j++) {
        if (topSellingStorage[i] === productData[j].key) {
          topSellingData.push(productData[j]);
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
          <Title level={3} align="center">
            Top Selling
          </Title>
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
