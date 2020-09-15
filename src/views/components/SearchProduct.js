import React, { Component } from "react";
import { Col } from "antd";
import Search from "antd/lib/input/Search";
import { connect } from "react-redux";
class SearchProduct extends Component {
  onSearch = (value) => {
    console.log(value);
  };

  render() {
    return (
      <Col span={8} offset={16} className="my-2">
        <Search
          placeholder="Search over 100 products"
          onSearch={this.onSearch}
          enterButton
          style={{ verticalAlign: "middle" }}
        />
      </Col>
    );
  }
}

function DispatchToProps() {}

export default connect()(SearchProduct);
