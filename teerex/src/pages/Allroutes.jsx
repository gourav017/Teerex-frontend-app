import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Allroutes;
