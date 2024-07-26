import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price } = product;
  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
  };
  return (
    <div className={classes.card_container}>
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes.product_details}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {rating && (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>{rating.count}</small>
            </>
          )}
        </div>
        <div className={classes.product_price}>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
