import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Input, Row, Col } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoroCarousel from "../components/PhotoCarousel";
import CardOnTop from "../components/CardOnTop";
import TopSelling from "../components/TopSelling";
import TopNew from "../components/TopNew";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class DefaultLayoutUser extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Router>
        <Layout className="layout">
          <Header style={{ padding: "0 5vw", backgroundColor: "#fff" }}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="light"
              style={{ backgroundColor: "#fff" }}
            >
              <Menu.Item key="logo" icon={<HomeOutlined />}>
                <Link to="/">Shoe Store</Link>
              </Menu.Item>
              <Menu.Item
                key="alipay"
                icon={<ShoppingCartOutlined />}
                style={{ float: "right" }}
              >
                <Link to="/cart">Cart</Link>
              </Menu.Item>
              <Menu.Item
                key="products"
                icon={<SketchOutlined />}
                style={{ float: "right" }}
              >
                <Link to="/products">Products</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <>
            <Row style={{ marginTop: "3vh" }}>
              <Col span={6} offset={16}>
                <Search
                  placeholder="Search over 100 products"
                  onSearch={(value) => console.log(value)}
                  enterButton
                />
              </Col>
            </Row>
          </>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* <div className="site-layout-content">Content</div> */}

            <Switch>
              <Route path="/products/top-selling">
                <div>Top Selling</div>
              </Route>
              <Route path="/products/new">New</Route>
              <Route path="/products/top-selling">Top Selling</Route>
              <Route path="/products">All Products</Route>
              <Route path="/cart">Cart</Route>
              <Route path="/">
                <PhoroCarousel />
                <CardOnTop />
                <TopSelling />
                <TopNew />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Tung ©2020 Created by Me
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default DefaultLayoutUser;
