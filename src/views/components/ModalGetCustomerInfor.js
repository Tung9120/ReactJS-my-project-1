import React, { Component, Suspense } from "react";
import { Button, Modal, Spin } from "antd";

const FormGetCustomerInfor = React.lazy(() =>
  import("./FormGetCumstomerInfor")
);

class ModalGetCumstomerInfor extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Order
        </Button>
        <Modal
          okText="Close"
          okType="default"
          title="Customer Information"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Suspense fallback={<Spin />}>
            <FormGetCustomerInfor closeModal={this.handleCancel} />
          </Suspense>
        </Modal>
      </>
    );
  }
}

export default ModalGetCumstomerInfor;
