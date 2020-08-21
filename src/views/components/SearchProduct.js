import React, { Component } from "react";
import Search from "antd/lib/input/Search";

class SearchProduct extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="Search over 100 products"
          onSearch={(value) => console.log(value)}
          enterButton
          style={{ verticalAlign: "middle" }}
        />
      </div>
    );
  }
}

export default SearchProduct;
