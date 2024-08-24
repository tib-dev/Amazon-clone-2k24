import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";

function Payment() {
  // Destructuring the state to get user, basket, and location
  const [{ user, basket, location }] = useContext(DataContext);

  // Calculate the total number of items in the basket
  const total = basket?.reduce((amount, item) => item.amount + amount, 0) || 0; // Initialize with 0 if basket is undefined

  // Handle cases where user or location might be undefined
  const userEmail = user?.email ? user.email.split("@")[0] : "Guest";
  const city = location?.city || "Not Available";
  const state = location?.state || "Not Available";
  const country = location?.country || "Not Available";

  return (
    <Layout>
      {/* Header */}
      <div className={classes.payment_header}>Checkout {total} items</div>
      <section>
        {/* Payment method */}
        <div>
          {/* Delivery address */}
          <h3>Delivery Address</h3>
          <div>
            {/* Displaying user email and delivery location */}
            <div>{userEmail}</div>
            <div>
              {city}, {state}
            </div>
            <div>{country}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
