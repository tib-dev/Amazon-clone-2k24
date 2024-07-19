import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className="row">
      <div className="">
        <div className={classes.category}>
          <Link to={`/category/${data.name}`}>
    
            <span>
              <h2>{data.title}</h2>
             { console.log(data.title)}
            </span>
            <img src={data.imgLink} alt={data.title} />
            <p>Shop now</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
