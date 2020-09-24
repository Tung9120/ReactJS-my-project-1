import React, { Component, Suspense } from "react";
import { Layout, Menu, Breadcrumb, Spin, Row, Badge } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./DefautLayoutUser.css";

const PhotoCarousel = React.lazy(() => import("../components/PhotoCarousel"));
const CardOnTop = React.lazy(() => import("../components/CardOnTop"));
const TopSelling = React.lazy(() => import("../components/TopSelling.js"));
const TopNew = React.lazy(() => import("../components/TopNew.js"));
const SearchProduct = React.lazy(() => import("../components/SearchProduct"));
const Products = React.lazy(() => import("../components/Products"));
const Cart = React.lazy(() => import("../components/Cart"));

const { Header, Content, Footer } = Layout;

class DefaultLayoutUser extends Component {
  state = {
    current: "home",
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    const { cart } = this.props;
    const count = cart.reduce((a, b) => a + b.quantity, 0);
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Menu
              style={{ position: "fixed", zIndex: 100, width: "100%" }}
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
              defaultSelectedKeys={["home"]}
            >
              <Menu.Item
                key="logo"
                icon={<SettingFilled twoToneColor="#52c41a" />}
              >
                <Link to="/">My Store</Link>
              </Menu.Item>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="products" icon={<SketchOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="alipay" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                  <Badge offset={[5, 0]} size="small" count={count}>
                    Cart
                  </Badge>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }} className="content">
            <div className="site-layout-content">
              <Suspense fallback={<Spin />}>
                <Switch>
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
                      <Breadcrumb.Item>
                        <Link to="/products">Products</Link>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={16} justify="center" className="TopNew">
                      <SearchProduct />
                      <Products />
                    </Row>
                  </Route>
                  <Route path="/cart">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Cart</Breadcrumb.Item>
                    </Breadcrumb>
                    <Cart />
                  </Route>
                  <Route path="/">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <PhotoCarousel />
                    <CardOnTop />
                    <TopSelling />
                    <TopNew />
                  </Route>
                </Switch>
              </Suspense>
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

function mapStateToProps(state) {
  return {
    cart: state.user.cart,
  };
}

export default connect(mapStateToProps)(DefaultLayoutUser);
