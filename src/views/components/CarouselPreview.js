import React, { Component } from "react";
import { Carousel, Empty, Button } from "antd";
import { connect } from "react-redux";

const contentStyle = {
  padding: "1rem",
  height: "160px",
  color: "#fff",
  textAlign: "center",
  backgroundSize: "cover",
};

class CarouselPreview extends Component {
  render() {
    const { carousel, products } = this.props;
    const productData = JSON.parse(products);
    const carouselData = JSON.parse(carousel);

    let productsInCarousel = [];

    for (let i = 0; i < productData.length; i++) {
      for (let j = 0; j < carouselData.length; j++) {
        if (productData[i].key === carouselData[j]) {
          productsInCarousel.push(productData[i]);
        }
      }
    }

    return (
      <>
        {productsInCarousel.length !== 3 ? (
          <Empty />
        ) : (
          <Carousel autoplay>
            {productsInCarousel.map((product, index) => (
              <div key={index}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${product.avatar})`,
                  }}
                >
                  <h3 className="text-white" level={3}>
                    {product.name}
                  </h3>
                  <h4 className="text-white" level={4}>
                    {product.description}
                  </h4>
                  <Button type="primary">Shop now</Button>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </>
    );
  }
}

function mapStateTopProps(state) {
  return {
    carousel: state.user.carousel,
    products: state.user.products,
  };
}

export default connect(mapStateTopProps)(CarouselPreview);
