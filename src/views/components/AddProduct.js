import React, { Component } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Typography,
  Select,
  Tag,
} from "antd";
import { connect } from "react-redux";
import { addProduct } from "../../actions/userActions";
import { withRouter } from "react-router";

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

class AddProduct extends Component {
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
    this.props.history.push("/admin/product/product-list");
  };

  render() {
    return (
      <>
        <Typography.Title level={4} align="center">
          Add product
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
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["product", "price"]}
            label="Price($)"
            rules={[{ type: "number", min: 0, max: 9999, required: true }]}
            min="1"
          >
            <InputNumber min="1" />
          </Form.Item>
          <Form.Item
            name={["product", "status"]}
            label="Status"
            rules={[{ required: true }]}
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
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.user.products,
  };
}

export default withRouter(connect(mapStateToProps, { addProduct })(AddProduct));
