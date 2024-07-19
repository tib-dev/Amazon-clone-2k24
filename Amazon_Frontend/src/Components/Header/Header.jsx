import React, { useRef, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { IoSearch, IoMenu } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import brand from "../../assets/image/amazonbrand.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { TiThMenu, TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
function Header() {
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState("auto");
  const dropdownIcon = <RiArrowDropDownFill className={classes.dropdownIcon} />;

  useEffect(() => {
    const adjustSelectWidth = () => {
      if (selectRef.current) {
        const option =
          selectRef.current.options[selectRef.current.selectedIndex];
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.height = "auto";
        tempDiv.style.width = "auto";
        tempDiv.style.whiteSpace = "nowrap";
        tempDiv.innerHTML = option.text;
        document.body.appendChild(tempDiv);
        const width = tempDiv.clientWidth + 20; // Add some padding
        document.body.removeChild(tempDiv);
        setSelectWidth(`${width}px`);
      }
    };

    adjustSelectWidth();

    // Adjust width on select change
    const handleSelectChange = (e) => {
      if (e.target.selectedIndex === 0) {
        // Change selected index to 1
        e.target.selectedIndex = 1;
        // Manually trigger change event to hide the first option
        const event = new Event("change", { bubbles: true });
        e.target.dispatchEvent(event);
      }
      adjustSelectWidth();
    };

    if (selectRef.current) {
      selectRef.current.addEventListener("change", handleSelectChange);
    }

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener("change", handleSelectChange);
      }
    };
  }, []);

  return (
    <div className={classes.header_wrapper}>
      <div className={classes.nav_top_wrapper}>
        <div className={classes.nav_left_wrapper}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={brand} alt="Brand" />
            </Link>
          </div>
          <div className={classes.delivery_address}>
            <Link to="" className={classes.delivery_to}>
              <p>Deliver to</p>
              <div className={classes.location}>
                <span>
                  <TiLocationOutline className={classes.gpsIcon} />
                </span>
                <span> Ethiopia</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.nav_search_wrapper}>
          <div
            className={classes.select_container}
            style={{ width: selectWidth }}
          >
            <select
              ref={selectRef}
              defaultValue="All"
              className={classes.selection}
            >
              <option disabled hidden>
                All {dropdownIcon}
              </option>

              <option>All Departments</option>
              <option>Arts & Crafts</option>
              <option>Automotive</option>
              <option>Baby</option>
              <option>Beauty & Personal Care</option>
              <option>Books</option>
              <option>Boys' Fashion</option>
              <option>Computers</option>
              <option>Deals</option>
              <option>Digital Music</option>
              <option>Electronics</option>
              <option>Girls' Fashion</option>
              <option>Health & Household</option>
              <option>Home & Kitchen</option>
              <option>Industrial & Scientific</option>
              <option>Kindle Store</option>
              <option>Luggage</option>
              <option>Men's Fashion</option>
              <option>Movies & TV</option>
              <option>Music, CDs & Vinyl</option>
              <option>Pet Supplies</option>
              <option>Prime Video</option>
              <option>Software</option>
              <option>Sports & Outdoors</option>
              <option>Tools & Home Improvement</option>
              <option>Toys & Games</option>
              <option>Video Games</option>
              <option>Women's Fashion</option>
            </select>
          </div>
          <input type="text" placeholder="Search Amazon" />
          <span>
            <IoSearch className={classes.search_icon} />
          </span>
        </div>
        <div className={classes.nav_right_wrapper}>
          <div className={classes.lang}>
            <Link to="">
              <img src="#" alt="" />
              <span>EN</span>
              <RiArrowDropDownFill className={classes.dropdown_icon_small} />
            </Link>
          </div>
          <div className={classes.account}>
            <Link to="">
              <p>Hello, sign in</p>
              <span>
                Account & Lists{" "}
                <RiArrowDropDownFill className={classes.dropdown_icon_small} />
              </span>
            </Link>
          </div>
          <div className={classes.order}>
            <Link to="/order">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
          </div>
          <div className={classes.cart}>
            <Link to="/cart">
              <FiShoppingCart className={classes.cart_icon} />
              <span className={classes.added_items}>0</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.nav_bottom_wrapper}>
        <div className={classes.nav_main}>
          <div className={classes.nav_menu}>
            <span className={classes.menu_icon}>
              <TiThMenu />
            </span>
            <Link to="">All</Link>
          </div>
          <div className={classes.nav_shop}>
            <ul className={classes.shop_list}>
              <li>
                <Link to="">Today's Deals</Link>
              </li>
              <li>
                <Link to="">Customer Service</Link>
              </li>
              <li>
                <Link to="">Registry</Link>
              </li>
              <li>
                <Link to="">Gift Cards</Link>
              </li>
              <li>
                <Link to="">Sell</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
