import React, { Component } from "react";
import { Carousel, Typography, Button } from "antd";

const { Title } = Typography;

// const contentStyle = {
//   height: '320px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const contentStyle = {
  padding: "0 1rem",
  height: 400,
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  backgroundImage: `url('http://lorempixel.com/output/abstract-q-c-1470-330-9.jpg')`,
  backgroundSize: 'cover',
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

class PhotoCarousel extends Component {
  render() {
    return (
      <>
        <Carousel autoplay>
          <div>
            <div style={contentStyle}>
              <Title
                level={2}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: "2rem 0",
                }}
              >
                Attack Air Max 720 Sage Low
              </Title>
              <Title level={4} style={{ color: "#fff", margin: "1rem 0" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary" size="large" style={{ margin: "1rem 0" }}>
                Shop Now
              </Button>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Title
                level={2}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: "2rem 0",
                }}
              >
                Attack Air Vapormax Flyknit 3
              </Title>
              <Title level={4} style={{ color: "#fff", margin: "1rem 0" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary" size="large" style={{ margin: "1rem 0" }}>
                Shop Now
              </Button>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Title
                level={2}
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: "2rem 0",
                }}
              >
                Attack Air Monarch Iv Se
              </Title>
              <Title level={4} style={{ color: "#fff", margin: "1rem 0" }}>
                Limited Items Available at this Price
              </Title>
              <Button type="primary" size="large" style={{ margin: "1rem 0" }}>
                Shop Now
              </Button>
            </div>
          </div>
        </Carousel>
        ,
      </>
    );
  }
}

export default PhotoCarousel;
