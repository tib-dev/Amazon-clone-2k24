import React from "react";
import "./Header.css";
import brand from "../../assets/CommonResources/images/amazonbrand.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <>
      <header>
        <div className="nav-wrapper ">
          <div className="nav-belt container-fluid">
            <div className="navbar-left">
              <div className="logo">
                <a href="#">
                  <img className="brand" src={brand} alt="Amazon logo" />
                </a>
              </div>
              <div className="deliver-address">
                <a href="#">Deliver to Swizerland</a>
              </div>
            </div>
            <form action="" className="search-bar-form">
              <div className="nav-fill">
                <div className="select">
                  <select defaultValue="All Departments">
                    <option value="">
                      All <ArrowDropDownIcon />
                    </option>
                    <option>All Departments</option>
                    <option>Arts &amp; Crafts</option>
                    <option>Automotive</option>
                    <option>Baby</option>
                    <option>Beauty &amp; Personal Care</option>
                    <option>Books</option>
                    <option>Boys' Fashion</option>
                    <option>Computers</option>
                    <option>Deals</option>
                    <option>Digital Music</option>
                    <option>Electronics</option>
                    <option>Girls' Fashion</option>
                    <option>Health &amp; Household</option>
                    <option>Home &amp; Kitchen</option>
                    <option>Industrial &amp; Scientific</option>
                    <option>Kindle Store</option>
                    <option>Luggage</option>
                    <option>Men's Fashion</option>
                    <option>Movies &amp; TV</option>
                    <option>Music, CDs &amp; Vinyl</option>
                    <option>Pet Supplies</option>
                    <option>Prime Video</option>
                    <option>Software</option>
                    <option>Sports &amp; Outdoors</option>
                    <option>Tools &amp; Home Improvement</option>
                    <option>Toys &amp; Games</option>
                    <option>Video Games</option>
                    <option>Women's Fashion</option>
                  </select>
                </div>
                <div className="nav-search-field">
                  <input
                    type="text"
                    placeholder="Search Amazon"
                    aria-label="Search Amazon"
                  />
                </div>
              </div>
            </form>

            <div className="nav-right">
              <div id="nav-tools" className="layoutToolbarPadding">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="/customer-preferences/edit?ie=UTF8&amp;preferencesReturnUrl=%2F&amp;ref_=topnav_lang_ais"
                      id="icp-nav-flyout"
                      className="nav-a nav-a-2 icp-link-style-2"
                    >
                      <span className="icp-nav-link-inner">
                        <span className="nav-line-1"></span>
                        <span className="nav-line-2">
                          <span className="icp-nav-flag icp-nav-flag-us icp-nav-flag-lop"></span>
                          <div>EN</div>
                          <span
                            className="nav-icon nav-arrow"
                            style={{ visibility: "visible" }}
                          ></span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="nav-line-1-container">
                        <span
                          id="nav-link-accountList-nav-line-1"
                          className="nav-line-1 nav-progressive-content"
                        >
                          Hello, sign in
                        </span>
                      </div>
                      <span className="nav-line-2">
                        Account &amp; Lists
                        <span
                          className="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="nav-line-1">Returns</span>
                      <span className="nav-line-2">
                        &amp; Orders<span className="nav-icon nav-arrow"></span>
                      </span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div id="nav-cart-count-container">
                        <span
                          id="nav-cart-count"
                          aria-hidden="true"
                          className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content"
                        >
                          0
                        </span>
                        <span className="nav-cart-icon nav-sprite"></span>
                      </div>
                      <div
                        id="nav-cart-text-container"
                        className="nav-progressive-attribute"
                      >
                        <span aria-hidden="true" className="nav-line-1"></span>
                        <span aria-hidden="true" className="nav-line-2">
                          Cart
                          <span className="nav-icon nav-arrow"></span>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-main container-fluid">
            <div className="nav-menu">
              <a href="">All</a>
            </div>
            <div className="nav-shop">
              <ul className="shop-list">
                <li>
                  <a href="">Today's Deals</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">Registry</a>
                </li>
                <li>
                  <a href="">Gift Cards</a>
                </li>
                <li>
                  <a href="">Sell</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
