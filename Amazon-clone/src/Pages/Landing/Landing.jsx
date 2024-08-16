import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Main/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
