import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SignIn from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Results";
import Cart from "../Pages/Cart/Cart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Four4 from "../Pages/404/Four4";
import Lang from "../Pages/Language/Lang";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

// Load the Stripe object using your publishable key
const stripePromise = loadStripe(
  "pk_test_51Pgi9wGNJwK6SxL49jDJtBoh0a2Z7Zs0k4EkfQ0epBqRc2MMi9TLbI7vfPGC28K1G62hjp3fllgth6ZiN8WPKx8500vzEDz1VU"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignIn />} />
      <Route
        path="/payment"
        element={
          // Wrap the Payment component with the Elements provider

          <ProtectedRoutes msg={"You must log in to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoutes
            msg={"You must log in to see your orders"}
            redirect={"/orders"}
          >
            <Elements stripe={stripePromise}>
              <Orders />
            </Elements>
          </ProtectedRoutes>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/language" element={<Lang />} />
      <Route path="*" element={<Four4 />} />
    </Routes>
  );
}

export default Routing;
