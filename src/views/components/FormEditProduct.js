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

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = (values) => {
    const { products } = this.props;
    const newValues = {
      ...values.product,
      status: values.product.status.split(),
    };
    const newProduct = {
      key: products.length,
      avatar: "https://via.placeholder.com/64",
      ...newValues,
    };
    this.props.addProduct(newProduct);
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
    const { product } = this.props;
    console.log(product);
    return (
      <>
        {" "}
        <Tooltip title="Edit">
          <Button type="primary" onClick={this.showModal}>
            <EditOutlined />
          </Button>
        </Tooltip>
        <Modal
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

function mapStateToProps(state) {
  return {
    products: state.user.products,
  };
}

export default connect(mapStateToProps)(FormEditProduct);
