import React from "react";
import {
  TeamOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
  FolderOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const AddAdmin = React.lazy(() => import("./views/components/AddAdmin"));
const AdminList = React.lazy(() => import("./views/components/AdminList"));
const AddProduct = React.lazy(() => import("./views/components/AddProduct"));
const ProductList = React.lazy(() => import("./views/components/ProductList"));

const routes = [
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
    path: "/",
    name: "Home",
    parIcon: <UserAddOutlined />,
    component: <div>Home</div>,
  },
];

export default routes;
