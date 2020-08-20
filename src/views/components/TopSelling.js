import React, { Component } from "react";
import { Typography, Row, Col, Card, Button } from "antd";

const { Title } = Typography;

class TopSelling extends Component {
  render() {
    return (
      <>
        <div style={{ margin: "2rem 0" }}>
          <Title level={2} align="center">
            Top Selling
          </Title>
          <Title level={3} align="center">
            Cum doctus civibus efficiantur in imperdiet deterruisset
          </Title>
        </div>
        <Row gutter={16} justify="center">
          <Col span={5}>
            <Card>
              <img src="https://via.placeholder.com/240/250" alt="?" width="100%" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                Product 1
              </p>
              <Title level={4}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button type="primary" style={{margin: '0 auto', textAlign: 'center', display: 'inherit'}}>
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5}>
            <Card>
              <img src="https://via.placeholder.com/240/250" alt="?" width="100%" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                Product 1
              </p>
              <Title level={4}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button type="primary" style={{margin: '0 auto', textAlign: 'center', display: 'inherit'}}>
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5}>
            <Card>
              <img src="https://via.placeholder.com/240/250" alt="?" width="100%" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                Product 1
              </p>
              <Title level={4}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button type="primary" style={{margin: '0 auto', textAlign: 'center', display: 'inherit'}}>
                Add to Cart
              </Button>
            </Card>
          </Col>
          <Col span={5}>
            <Card>
              <img src="https://via.placeholder.com/240/250" alt="?" width="100%" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                Product 1
              </p>
              <Title level={4}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  color: "#524dda",
                }}
              >
                $10
              </Title>
              <Button type="primary" style={{margin: '0 auto', textAlign: 'center', display: 'inherit'}}>
                Add to Cart
              </Button>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TopSelling;
