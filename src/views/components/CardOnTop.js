import React, { Component } from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import "./CardOnTop.css";

const { Meta } = Card;
const { Title } = Typography;

const contentStyle = {
  backgroundImage: `url('http://lorempixel.com/output/city-q-c-560-260-4.jpg')`,
  width: "auto",
  height: "250px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 0,
};

class CardOnTop extends Component {
  render() {
    return (
      <>
        <Row gutter={16}>
          <Col span={8} className="col">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={<Title level={4}>Man 's Collection</Title>}
                  className="text-center"
                />
                <Button type="primary">Shop Now</Button>
              </div>
            </Card>
          </Col>
          <Col span={8} className="col">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={<Title level={4}>Woman 's Collection</Title>}
                  className="text-center"
                />
                <Button type="primary">Shop Now</Button>
              </div>
            </Card>
          </Col>
          <Col span={8} className="col">
            <Card>
              <div style={contentStyle}>
                <Meta
                  title={<Title level={4}>Kid 's Collection</Title>}
                  className="text-center"
                />
                <Button type="primary">Shop Now</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default CardOnTop;
