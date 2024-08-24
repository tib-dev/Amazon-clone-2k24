import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
function Payment() {
  // Destructuring the state to get user, basket, and location
  const [{ user, basket, location }] = useContext(DataContext);

  // Calculate the total number of items in the basket
  const total = basket?.reduce((amount, item) => item.amount + amount, 0) || 0; // Initialize with 0 if basket is undefined
  const totalPrice = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  // Handle cases where user or location might be undefined
  const userEmail = user?.email ? user.email.split("@")[0] : "Guest";
  const city = location?.city || "Not Available";
  const state = location?.state || "Not Available";
  const country = location?.country || "Not Available";
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  return (
    <Layout>
      {/* Header */}
      <div className={classes.payment_header}>Checkout {total} items</div>

      <section className={classes.payment_method}>
        {/* Payment method */}
        <div className={classes.flex}>
          {/* Delivery address */}
          <h3>Delivery Address</h3>
          <div>
            {/* Displaying user email and delivery location */}
            <div>
              <p>{userEmail}</p>
            </div>
            <div>
              <p>
                {city}, {state}
              </p>
            </div>
            <div>
              <p>{country}</p>
            </div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {/* Displaying each product in the basket */}
            {basket.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card */}

        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* Stripe Card Element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p> Total Order | </p>{" "}
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
