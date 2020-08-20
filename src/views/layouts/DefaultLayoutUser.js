import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoroCarousel from "../components/PhotoCarousel";
import CardOnTop from "../components/CardOnTop";
import TopSelling from "../components/TopSelling";
import TopNew from "../components/TopNew";

import "./DefautLayoutUser.css";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class DefaultLayoutUser extends Component {
  state = {
    current: "home",
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
          <Header>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item
                key="logo"
                icon={<SettingFilled twoToneColor="#52c41a" spin />}
              >
                <Link to="/">Shoe Store</Link>
              </Menu.Item>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="products" icon={<SketchOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="alipay" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">Cart</Link>
              </Menu.Item>
              <Menu.Item>
                <Search
                  placeholder="Search over 100 products"
                  onSearch={(value) => console.log(value)}
                  enterButton
                  style={{ verticalAlign: "middle" }}
                />
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }} className="content">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Switch>
                <Route path="/products/top-selling">
                  <div>Top Selling</div>
                </Route>
                <Route path="/products/new">
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Products</Breadcrumb.Item>
                    <Breadcrumb.Item>New</Breadcrumb.Item>
                  </Breadcrumb>
                  New
                </Route>
                <Route path="/products/top-selling">
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Product</Breadcrumb.Item>
                    <Breadcrumb.Item>Top Selling</Breadcrumb.Item>
                  </Breadcrumb>
                  Top Selling
                </Route>
                <Route path="/products">
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Products</Breadcrumb.Item>
                  </Breadcrumb>
                  All Products
                </Route>
                <Route path="/cart">
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Cart</Breadcrumb.Item>
                  </Breadcrumb>
                  Cart
                </Route>
                <Route path="/">
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                  </Breadcrumb>
                  <PhoroCarousel />
                  <CardOnTop />
                  <TopSelling />
                  <TopNew />
                </Route>
              </Switch>
            </div>
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
