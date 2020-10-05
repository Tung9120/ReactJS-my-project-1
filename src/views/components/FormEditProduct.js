import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Select,
  Tag,
  Tooltip,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { updateProduct } from "../../actions/userActions";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    select: "${label} is not validate select!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class FormEditProduct extends Component {
  state = { visible: false };
  formRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onFinish = (values) => {
    const { product } = this.props;

    const newValues = {
      ...values.product,
      status: !Array.isArray(values.product.status)
        ? values.product.status.split()
        : values.product.status,
    };

    const productUpdated = {
      key: product.key,
      avatar: "https://via.placeholder.com/64",
      ...newValues,
    };

    this.props.updateProduct(productUpdated);
    this.setState({
      visible: false,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    this.onReset();
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    this.onReset();
  };

  render() {
    const { product } = this.props;
    return (
      <>
        <Tooltip title="Edit">
          <Button type="primary" onClick={this.showModal}>
            <EditOutlined />
          </Button>
        </Tooltip>
        <Modal
          okText="Close"
          okType="default"
          title="Edit product"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Typography.Title level={4} align="center">
            Edit product: {product.name}
          </Typography.Title>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}
            ref={this.formRef}
          >
            <Form.Item
              name={["product", "name"]}
              label="Name"
              rules={[{ required: true }]}
              initialValue={product.name}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["product", "price"]}
              label="Price($)"
              rules={[{ type: "number", min: 1, max: 9999, required: true }]}
              initialValue={product.price}
              min="1"
            >
              <InputNumber min="1" />
            </Form.Item>
            <Form.Item
              name={["product", "inventory"]}
              label="Inventory"
              rules={[{ type: "number", min: 0, max: 9999, required: true }]}
              initialValue={product.inventory}
              min="1"
            >
              <InputNumber min="0" />
            </Form.Item>
            <Form.Item
              name={["product", "status"]}
              label="Status"
              rules={[{ required: true }]}
              initialValue={product.status}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                style={{ width: 120 }}
              >
                <Option value="new">
                  <Tag color="green">New</Tag>
                </Option>
                <Option value="out-of-stock">
                  <Tag color="volcano">Out Of Stock</Tag>
                </Option>
                <Option value="bestseller">
                  <Tag color="geekblue">Bestseller</Tag>
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              name={["product", "description"]}
              // rules={[{ required: true }]}
              label="Description"
              initialValue={product.description}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default connect(null, { updateProduct })(FormEditProduct);
