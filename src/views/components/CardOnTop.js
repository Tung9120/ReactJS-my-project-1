import React, { Component } from "react";
import { Card, Row, Col, Typography, Button, Empty } from "antd";
import { connect } from "react-redux";
import "./CardOnTop.css";

const { Meta } = Card;
const { Title } = Typography;

const contentStyle = {
  backgroundImage: `url('http://lorempixel.com/output/city-q-c-560-260-4.jpg')`,
  height: "250px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

class CardOnTop extends Component {
  state = {
    topCards: [],
  };

  render() {
    const { topCards } = this.props;

    return (
      <>
        <Row gutter={16} className="CardOnTop">
          {topCards.length !== 3 ? (
            <div style={{ margin: "0 auto" }}>
              <Title level={3} align="center">Top Cards</Title>
              <Empty />
            </div>
          ) : (
            topCards.map((item, i) => (
              <Col span={8} className="col mb-1" key={i}>
                <Card>
                  <div style={contentStyle}>
                    <Meta
                      title={
                        <Title level={4} className="text-white">
                          {item}
                        </Title>
                      }
                    />
                    <Button type="primary" className="mt-1">
                      Shop Now
                    </Button>
                  </div>
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
    topCards: state.user.topCards,
  };
}

export default connect(mapStateToProps)(CardOnTop);
