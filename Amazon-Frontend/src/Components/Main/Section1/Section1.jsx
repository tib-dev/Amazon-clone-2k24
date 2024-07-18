import React from "react";
import SlideComponent from "./Slides"; // Assuming this is where your SlideComponent is located
import "./Section1.module.css"; // Ensure your CSS file path is correct

import bigImage1 from "../../../assets/CommonResources/images/10022.jpg";
import small1 from "../../../assets/CommonResources/images/10023.jpg";
import small2 from "../../../assets/CommonResources/images/10024.jpg";
import small3 from "../../../assets/CommonResources/images/10025.jpg";
import small4 from "../../../assets/CommonResources/images/10031.jpg";
import small5 from "../../../assets/CommonResources/page1/10001.jpg";
import small6 from "../../../assets/CommonResources/page1/10002.jpg";
import small7 from "../../../assets/CommonResources/page1/10003.jpg";
import small8 from "../../../assets/CommonResources/page1/10004.jpg";
import slide1 from "../../../assets/CommonResources/page1/slide10001.jpg";
import slide2 from "../../../assets/CommonResources/page1/slide10002.jpg";
import slide3 from "../../../assets/CommonResources/page1/slide10003.jpg";
import slide4 from "../../../assets/CommonResources/page1/slide10004.jpg";

const slideItems = [
  { imageUrl: slide1, altText: "Slide 1" },
  { imageUrl: slide2, altText: "Slide 2" },
  { imageUrl: slide3, altText: "Slide 3" },
  { imageUrl: slide4, altText: "Slide 4" },
];

function Section1() {
  return (
    <div className="container-fluid" id="section-wrapper">
      <SlideComponent items={slideItems} />

      <div className="row grid-wrapper">
        <div
          className="col-lg-3 col-sm-4"
          style={{ backgroundImage: `url(${bigImage1})` }}
        >
          <div className="title">
            <h4>Amazon Gadget Store</h4>
          </div>
          <div className="gallery">
            <div id="small-image" className="small-image image-grid row">
              <div className="images col-4">
                <img src={small1} alt="Tablets" />
                <span className="item-name">Tablets</span>
              </div>
              <div className="images col-4">
                <img src={small2} alt="Laptops" />
                <span className="item-name">Laptops</span>
              </div>
              <div className="images col-4">
                <img src={small3} alt="TVs" />
                <span className="item-name">TVs</span>
              </div>
            </div>
            <div className="link">
              <a href="#">See more from Amazon gadgets</a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-sm-4"
          style={{ backgroundImage: `url(${small4})` }}
        >
          <div className="title">
            <h4>Beauty Steals under $25</h4>
          </div>
          <div className="link">
            <a href="">Shop now</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4">
          <div className="title">
            <h4>Easy updates for elevated spaces</h4>
          </div>
          <div className="images row">
            <div className="image-card col-6">
              <img src={small5} alt="" />
              <span className="item-name">Baskets and hampers</span>
            </div>
            <div className="image-card col-6">
              <img src={small6} alt="" />
              <span className="item-name">Hardwares</span>
            </div>
          </div>
          <div className="images row">
            <div className="image-card col-6">
              <img src={small7} alt="" />
              <span className="item-name">Accent furnitures</span>
            </div>
            <div className="image-card col-6">
              <img src={small8} alt="" />
              <span className="item-name">Wallpapers and paints</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-sm-4"
          style={{ backgroundImage: `url(${small4})` }}
        >
          <div className="title">
            <h4>Shop best-selling categories</h4>
          </div>
          <div className="link">
            <a href="">See more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
