import React, { useEffect } from "react";
import classes from "./Resultd.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { prodcutUrl } from "../../../Endpionts/endPoints";

function Results() {
  const [results, setRoults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${prodcutUrl}/products/category/${categoryName}`)
      .then((res) => {
        setRoults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
