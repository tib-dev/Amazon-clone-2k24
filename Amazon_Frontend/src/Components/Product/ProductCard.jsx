import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.card_container}>
      <a href="#">
        <img src={image} alt={title} />
      </a>
      <div className={classes.product_details}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>{rating.count}</small>
        </div>
        <div className={classes.product_price}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
