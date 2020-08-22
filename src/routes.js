import React from "react";
import {
  TeamOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
  FolderOutlined,
  UserAddOutlined,
  HomeOutlined,
  SlidersOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router";

const AddAdmin = React.lazy(() => import("./views/components/AddAdmin"));
const AdminList = React.lazy(() => import("./views/components/AdminList"));
const AddProduct = React.lazy(() => import("./views/components/AddProduct"));
const ProductList = React.lazy(() => import("./views/components/ProductList"));

const routes = [
  {
    path: "/",
    name: "Go client pages",
    parIcon: <UserAddOutlined />,
    component: <Redirect to="/" />,
  },
  {
    path: "/admin",
    name: "Account",
    parIcon: <TeamOutlined />,
    children: [
      {
        name: "Add admin",
        path: "/admin/account/add-admin",
        component: <AddAdmin />,
        childIcon: <UserAddOutlined />,
      },
      {
        name: "Admin list",
        path: "/admin/account/admin-list",
        component: <AdminList />,
        childIcon: <TeamOutlined />,
      },
    ],
  },
  {
    path: "/admin",
    name: "Product",
    parIcon: <FolderOutlined />,
    children: [
      {
        name: "Add product",
        path: "/admin/product/add-product",
        component: <AddProduct />,
        childIcon: <FileAddOutlined />,
      },
      {
        name: "Product list",
        path: "/admin/product/product-list",
        component: <ProductList />,
        childIcon: <UnorderedListOutlined />,
      },
    ],
  },
  {
    path: "/admin",
    name: "Home Page",
    parIcon: <HomeOutlined />,
    children: [
      {
        name: "Carousel",
        path: "/admin/home-page/carousel",
        component: <div>Carousel</div>,
        childIcon: <SlidersOutlined />,
      },
      {
        name: "3 Top Cards",
        path: "/admin/home-page/3-top-cards",
        component: <div>3 Top Cards</div>,
        childIcon: <CreditCardOutlined />,
      },
      {
        name: "Top Selling",
        path: "/admin/home-page/top-selling",
        component: <div>Top selling</div>,
        childIcon: <DollarCircleOutlined />,
      },
      {
        name: "Top New",
        path: "/admin/home-page/top-new",
        component: <div>Top New</div>,
        childIcon: <BellOutlined />,
      },
    ],
  },
];

export default routes;
