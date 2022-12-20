import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import ShopHome from "./shop/ShopHome";

import Products from "./shop/Products";
import SingleProduct from "./shop/ShopComponents/SingleProduct";

import Admin from "./Admin/Admin";
import AdminLogin from "./Admin/AdminLogin"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<ShopHome />} />
      <Route path="/store/products/:categeory" element={<Products />} />
      <Route
        path="/store/products/:categeory/:product_id"
        element={<SingleProduct />}
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  );
};

export default AllRoutes;
