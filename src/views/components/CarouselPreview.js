import React, { Component } from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class CarouselPreview extends Component {
  render() {
    return (
      <>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
        </Carousel>
      </>
    );
  }
}

function mapStateTopProps(state){
  return{
    carousel: state.user.carousel
  }
}

export default connect(mapStateTopProps)(CarouselPreview);
