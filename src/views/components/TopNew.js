import React, { Component } from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import "./TopNew.css";

const { Title } = Typography;

class TopNew extends Component {
  render() {
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
          <Col span={5} className="col mb-1">
            <Card hoverable>
              <img
                src="https://via.placeholder.com/240/250"
                alt="?"
                className="w-100"
              />
              <p className="text-center bold mt-1">Product 1</p>
              <Title
                level={4}
                className="text-center bold mt-1"
                style={{
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button className="d-block mx-auto mb-1" type="primary">
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5} className="col mb-1">
            <Card hoverable>
              <img
                src="https://via.placeholder.com/240/250"
                alt="?"
                className="w-100"
              />
              <p className="text-center bold mt-1">Product 1</p>
              <Title
                level={4}
                className="text-center bold mt-1"
                style={{
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button className="d-block mx-auto mb-1" type="primary">
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5} className="col mb-1">
            <Card hoverable>
              <img
                src="https://via.placeholder.com/240/250"
                alt="?"
                className="w-100"
              />
              <p className="text-center bold mt-1">Product 1</p>
              <Title
                level={4}
                className="text-center bold mt-1"
                style={{
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button className="d-block mx-auto mb-1" type="primary">
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5} className="col mb-1">
            <Card hoverable>
              <img
                src="https://via.placeholder.com/240/250"
                alt="?"
                className="w-100"
              />
              <p className="text-center bold mt-1">Product 1</p>
              <Title
                level={4}
                className="text-center bold mt-1"
                style={{
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button className="d-block mx-auto mb-1" type="primary">
                Add to Cart
              </Button>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TopNew;
