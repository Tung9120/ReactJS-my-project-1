import React, { Component } from "react";
import { Typography, Row, Col, Card, Button, Empty } from "antd";
import { connect } from "react-redux";
import "./TopNew.css";

const { Title } = Typography;

class TopNew extends Component {
  state = {
    topNewData: [],
  };

  componentDidMount() {
    const { products, topNew } = this.props;
    let topNewData = [];
    for (let i = 0; i < topNew.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (topNew[i] === products[j].key) {
          topNewData.push(products[j]);
        }
      }
    }
    this.setState({
      topNewData,
    });
  }

  render() {
    const { topNewData } = this.state;
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
        <Row gutter={16} justify="center" className="TopNew">
          {topNewData.length !== 3 ? (
            <Empty />
          ) : (
            topNewData.map((item, i) => (
              <Col span={5} className="col mb-1">
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
    topNew: state.user.topNew,
  };
}

export default connect(mapStateToProps)(TopNew);
