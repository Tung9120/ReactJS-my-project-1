import React, { Component } from "react";
import {Col} from 'antd';
import Search from "antd/lib/input/Search";

class SearchProduct extends Component {
  render() {
    return (
      <Col span={8} offset={16}>
        <Search
          placeholder="Search over 100 products"
          onSearch={(value) => console.log(value)}
          enterButton
          style={{ verticalAlign: "middle" }}
        />
      </Col>
    );
  }
}

export default SearchProduct;
