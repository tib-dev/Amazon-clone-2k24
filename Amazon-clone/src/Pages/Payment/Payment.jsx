import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../api/axios";

function Payment() {
  const [{ user, basket, location }] = useContext(DataContext);

  const total = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;
  const totalPrice = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const [isProcessing, setIsProcessing] = useState(false);

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

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${totalPrice * 100}`,
      });

      const clientSecret = response.data.clientSecret;

      const confirmations = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (confirmations.error) {
        console.error("Payment failed", confirmations.error);
        setCardError(confirmations.error.message);
      } else {
        console.log("Payment succeeded");
        // Handle successful payment here
      }
    } catch (error) {
      console.error("Payment failed", error);
      setCardError("An unexpected error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={classes.payment_header}>Checkout {total} items</div>

      <section className={classes.payment_method}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
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
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button type="submit" disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </button>
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
