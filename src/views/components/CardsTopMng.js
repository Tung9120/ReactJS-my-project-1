import React, { Component } from "react";
import { Form, Input, Button, Space, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {connect} from 'react-redux';

const {Title} = Typography;

class CardsTopMng extends Component {
  onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  render() {
    return (
      <>
        <Title level={3}>Manage cards on top</Title>
        <Form
          name="dynamic_form_nest_item"
          onFinish={this.onFinish}
          autoComplete="off"
        >
          <Form.List name="cards">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="start"
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, "cardName"]}
                        fieldKey={[field.fieldKey, "cardName"]}
                        rules={[
                          { required: true, message: "Missing card name" },
                        ]}
                      >
                        <Input placeholder="Card Name" />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "slug"]}
                        fieldKey={[field.fieldKey, "slug"]}
                        rules={[
                          { required: true, message: "Missing slug" },
                        ]}
                      >
                        <Input placeholder="Slug. Ex: /card" />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default connect()(CardsTopMng);
