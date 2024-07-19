import React, { useState, useEffect } from "react";
import classes from "./Result.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { productUrl } from "../../Components/Endpionts/endPoints";
import ProductCard from '../../Components/Product/ProductCard'

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
const productUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]); // Include categoryName in the dependency array

  console.log(categoryName);

  return (
    <Layout>
      <section>
        <h1>Results</h1>
        <p>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
