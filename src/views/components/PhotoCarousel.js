import React, { Component } from "react";
import { Carousel, Typography, Button, Empty } from "antd";
import { connect } from "react-redux";

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
  state = {
    carouselData: [],
  };

  componentDidMount() {
    const { products, carousel } = this.props;
    let carouselData = [];
    for (let i = 0; i < carousel.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (carousel[i] === products[j].key) {
          carouselData.push(products[j]);
        }
      }
    }
    this.setState({
      carouselData: carouselData,
    });
  }

  render() {
    const { carouselData } = this.state;
    return (
      <>
        <Carousel autoplay className="mb-1">
          {carouselData.length !== 3 ? (
            <Empty />
          ) : (
            carouselData.map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${item.avatar})`,
                  }}
                >
                  <Title
                    level={3}
                    style={{
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </Title>
                  <Title level={4} style={{ color: "#fff" }}>
                    {item.description ? item.description : ""}
                  </Title>
                  <Button type="primary">Shop Now</Button>
                </div>
              </div>
            ))
          )}
        </Carousel>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
    carousel: state.user.carousel,
  };
}

export default connect(mapStateToProps)(PhotoCarousel);
