import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SignIn from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Results";
import Cart from "../Pages/Cart/Cart";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:category" element={<Results />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;
