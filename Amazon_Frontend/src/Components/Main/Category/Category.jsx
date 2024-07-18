import React from "react";
import categoryData from "./categoryData"; 
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <div className={classes.category_container}>
      {categoryData.map((infos) => (
        <CategoryCard  data={infos} />
      ))}
    </div>
  );
}

export default Category;
