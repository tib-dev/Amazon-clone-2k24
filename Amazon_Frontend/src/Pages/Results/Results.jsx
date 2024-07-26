import React, { useState, useEffect } from "react";
import classes from "./Result.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Components/Endpionts/endPoints";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${productUrl}/products`, {
          params: {
            category: categoryName,
          },
        });
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
       
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1>Results</h1>
        <p>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product}
              renderDesc={false}
              renderAdd={true}
              />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
