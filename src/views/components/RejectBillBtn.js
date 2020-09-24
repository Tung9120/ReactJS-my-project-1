import React, { Component } from "react";
import { Button, Tooltip, message } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { rejectBill } from "../../actions/userActions";

class RejectBillBtn extends Component {
  onClick = (e) => {
    const { bill, rejectBill } = this.props;

    rejectBill(bill);

    if (bill.status[0] !== "fail") {
      message.success("successfully changed");
    }
  };

  render() {
    return (
      <>
        <Tooltip title="Reject bill">
          <Button type="danger" onClick={this.onClick}>
            <StopOutlined />
          </Button>
        </Tooltip>
      </>
    );
  }
}

export default connect(null, { rejectBill })(RejectBillBtn);
