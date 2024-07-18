import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
function ProductCard() {
  return (
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <div className="">
        <h3>title</h3>
        <div className="">
          <Rating value={5} precision={0.1} />
          <small>{60}</small>
        </div>
        <div className="">
          <CurrencyFormat />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
