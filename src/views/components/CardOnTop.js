import React, { Component } from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import "../style/custom.css";
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
  render() {
    return (
      <>
        <Row gutter={16} className="CardOnTop">
          <Col span={8} className="col mb-1">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={
                    <Title level={4} className="text-white">
                      Man 's Collection
                    </Title>
                  }
                />
                <Button type="primary" className="mt-1">
                  Shop Now
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={8} className="col mb-1">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={
                    <Title level={4} className="text-white">
                      Woman 's Collection
                    </Title>
                  }
                />
                <Button type="primary" className="mt-1">
                  Shop Now
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={8} className="col mb-1">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={
                    <Title level={4} className="text-white">
                      Kid 's Collection
                    </Title>
                  }
                />
                <Button type="primary" className="mt-1">
                  Shop Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default CardOnTop;
