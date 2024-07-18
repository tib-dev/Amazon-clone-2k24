import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 

  return (
    <div>
      {products &&
        products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))}
    </div>
  );
}

export default Product;
