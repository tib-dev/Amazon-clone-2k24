import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import { productUrl } from "../Endpionts/endPoints";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <div className={classes.product_container}>
        {products.map((singleProduct) => (
          <ProductCard
            product={singleProduct}
            renderAdd={true}
            key={singleProduct.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;
