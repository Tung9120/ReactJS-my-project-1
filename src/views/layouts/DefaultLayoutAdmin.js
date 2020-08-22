import React, { Component, Suspense } from "react";
import { Layout, Menu, Breadcrumb, Tag, Spin } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayoutAdmin extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { routes } = this.props;

    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              {routes.map((route, index) => {
                return route.children ? (
                  <SubMenu
                    key={`sub${index}`}
                    icon={route.parIcon}
                    title={route.name}
                  >
                    {route.children.map((child, i) => (
                      <Menu.Item key={child.name + i}>
                        {child.childIcon}
                        <Link to={child.path}>{child.name}</Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={index} icon={route.parIcon}>
                    <Link to={route.path}>{route.name}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Tag icon={<FacebookOutlined />} color="#3b5999">
                {this.props.name}
              </Tag>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Suspense fallback={<Spin />}>
                  {routes.map((route, index) =>
                    route.children ? (
                      route.children.map((child, i) => (
                        <Route exact path={child.path} key={i}>
                          {child.component}
                        </Route>
                      ))
                    ) : (
                      <Route exact path={route.path} key={index}>
                        {route.component}
                      </Route>
                    )
                  )}
                </Suspense>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
  };
}

export default connect(mapStateToProps)(DefaultLayoutAdmin);
