import React, { Component } from "react";
import { Card, Row, Col, Typography, Button } from "antd";

const contentStyle = {
  backgroundImage: `url('http://lorempixel.com/output/city-q-c-560-260-4.jpg')`,
  width: "auto",
  height: "250px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

class CardOnTop extends Component {
  constructor(props){
    super(props);
    this.state = {
      showBtn: false
    }
  }

  onMouseSeenTer = () =>{
    this.setState({
      showBtn: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      showBtn: false
    })
  }

  render() {
    const {showBtn} = this.state;
    return (
      <>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <div style={contentStyle}>
                <Typography.Title level={3} style={{ color: "#fff" }}>
                  Man 's Collection
                </Typography.Title>
                <Button type="primary">Shop Now</Button>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div style={contentStyle}>
                <Typography.Title level={3} style={{ color: "#fff" }}>
                  Woman 's Collection
                </Typography.Title>
                <Button type="primary">Shop Now</Button>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div style={contentStyle}>
                <Typography.Title level={3} style={{ color: "#fff" }}>
                  Kid 's Collection
                </Typography.Title>
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
