import React, { Component } from "react";
import { Button, Tooltip, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { updateBill } from "../../actions/userActions";

class AcceptBillBtn extends Component {
  onClick = (e) => {
    const { bill, updateBill } = this.props;

    updateBill(bill);

    if (bill.status[0] !== "success") {
      message.success("successfully changed");
    }
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

export default connect(null, { updateBill })(AcceptBillBtn);
