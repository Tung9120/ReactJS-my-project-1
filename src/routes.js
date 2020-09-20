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
  SnippetsOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router";

const AddAdmin = React.lazy(() => import("./views/components/AddAdmin"));
const AdminList = React.lazy(() => import("./views/components/AdminList"));
const AddProduct = React.lazy(() => import("./views/components/AddProduct"));
const ProductList = React.lazy(() => import("./views/components/ProductList"));
const CarouselMng = React.lazy(() => import("./views/components/CarouselMng"));
const CardsTopMng = React.lazy(() =>
  import("./views/components/CardsTopMng.js")
);
const TopSellingMng = React.lazy(() =>
  import("./views/components/TopSellingMng")
);
const TopNewMng = React.lazy(() => import("./views/components/TopNewMng.js"));

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
        component: <CarouselMng />,
        childIcon: <SlidersOutlined />,
      },
      {
        name: "3 Top Cards",
        path: "/admin/home-page/3-top-cards",
        component: <CardsTopMng />,
        childIcon: <CreditCardOutlined />,
      },
      {
        name: "Top Selling",
        path: "/admin/home-page/top-selling",
        component: <TopSellingMng />,
        childIcon: <DollarCircleOutlined />,
      },
      {
        name: "Top New",
        path: "/admin/home-page/top-new",
        component: <TopNewMng />,
        childIcon: <BellOutlined />,
      },
    ],
  },
  {
    path: "/admin",
    name: "Order",
    parIcon: <SnippetsOutlined />,
    children: [
      {
        name: "Bill",
        path: "/admin/manage-order/bills",
        component: <div>bills</div>,
        childIcon: <FileTextOutlined />,
      },
    ],
  },
];

export default routes;
