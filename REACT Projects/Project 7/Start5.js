import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function Start5() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Start5;
