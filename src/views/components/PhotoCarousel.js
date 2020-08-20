import React, { Component } from "react";
import { Carousel, Typography, Button } from "antd";

const { Title } = Typography;

const contentStyle = {
  padding: "1rem",
  height: "320px",
  color: "#fff",
  textAlign: "center",
  backgroundImage: `url('http://lorempixel.com/output/abstract-q-c-1470-330-9.jpg')`,
  backgroundSize: "cover",
};

class PhotoCarousel extends Component {
  render() {
    return (
      <>
        <Carousel autoplay className="mb-1">
          <div>
            <div style={contentStyle}>
              <Title
                level={3}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Attack Air Max 720 Sage Low
              </Title>
              <Title level={4} style={{ color: "#fff" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary">Shop Now</Button>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Title
                level={3}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Attack Air Vapormax Flyknit 3
              </Title>
              <Title level={4} style={{ color: "#fff" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary">Shop Now</Button>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Title
                level={3}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Attack Air Monarch Iv Se
              </Title>
              <Title level={4} style={{ color: "#fff" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary">Shop Now</Button>
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}

export default PhotoCarousel;
