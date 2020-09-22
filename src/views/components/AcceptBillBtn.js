import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

class AcceptBillBtn extends Component {
  onClick = (e) => {
    const { bill } = this.props;
    console.log(bill);
  };

  render() {
    return (
      <>
      <Tooltip title="Accept bill">
        <Button type="primary" onClick={this.onClick}>
          <CheckOutlined />
        </Button>
        </Tooltip>
      </>
    );
  }
}

export default connect(null)(AcceptBillBtn);
