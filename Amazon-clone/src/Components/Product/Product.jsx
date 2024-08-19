import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import { productUrl } from "../Endpionts/endPoints";
import { FiLoader } from "react-icons/fi";

function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${productUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      {isLoading ? (
      <FiLoader />
      ) : (
        <div className={classes.product_container}>
          {products.map((product) => (
            <ProductCard
              product={{ ...product, renderAdd: true }}
              key={product.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Product;
