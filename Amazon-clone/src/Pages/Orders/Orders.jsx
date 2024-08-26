import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./orders.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userOrdersRef = collection(db, "users", user.uid, "orders");

      const unsubscribe = onSnapshot(userOrdersRef, (snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(orders);
      });

      return () => unsubscribe(); // Cleanup on unmount
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "10px", textAlign: "center" }}>
              You don't have orders yet.
            </div>
          )}
          <div>
            {orders?.map((eachOrder, i) => {
              let orderDate;
              if (eachOrder?.data?.orderDate?.seconds) {
                // Firestore Timestamp
                orderDate = new Date(eachOrder?.data?.orderDate.seconds * 1000);
              } else {
                // Assuming orderDate is a valid date string
                orderDate = new Date(eachOrder?.data?.orderDate);
              }

              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  <p>Order Date: {orderDate.toLocaleString()}</p>{" "}
                  {/* Updated line */}
                  <div>
                    {eachOrder?.data?.basket?.map((orderItem) => (
                      <ProductCard
                        flex={true}
                        product={orderItem}
                        key={orderItem.id}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
