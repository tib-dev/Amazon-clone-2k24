import React, { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { TiThMenu, TiLocationOutline } from "react-icons/ti";
import brand from "../../assets/image/amazonbrand.png";
import { DataContext } from "../DataProvider/DataProvider";
import classes from "./Header.module.css";
import { auth } from "../../Utility/firebase";

function Header() {
  const [state, dispatch] = useContext(DataContext);
  const { user, basket } = state;
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState("auto");
  const [location, setLocation] = useState(null);
  // const dropdownIcon = <RiArrowDropDownFill className={classes.dropdownIcon} />;
  console.log(location);
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const showPosition = async (position, retries = 3) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const fetchLocation = async (retryCount) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();

          // Store the computed location value in the state
          const location =
            data.address.country ||
            data.address.city ||
            data.address.state ||
            "Location not found";

          setLocation(location);
        } catch (error) {
          console.error("Error fetching location:", error);
          if (retryCount > 0) {
            setTimeout(() => fetchLocation(retryCount - 1), 1000);
          } else {
            setLocation("Location not available");
            console.warn(
              "Failed to retrieve location after multiple attempts."
            );
          }
        }
      };

      fetchLocation(retries);
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
        default:
          break;
      }
    };

    getLocation();

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
        const width = tempDiv.clientWidth + 20;
        document.body.removeChild(tempDiv);
        setSelectWidth(`${width}px`);
      }
    };

    adjustSelectWidth();

    const handleSelectChange = (e) => {
      if (e.target.selectedIndex === 0) {
        e.target.selectedIndex = 1;
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

  const options = [
    "All Departments",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys' Fashion",
    "Computers",
    "Deals",
    "Digital Music",
    "Electronics",
    "Girls' Fashion",
    "Health & Household",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Kindle Store",
    "Luggage",
    "Men's Fashion",
    "Movies & TV",
    "Music, CDs & Vinyl",
    "Pet Supplies",
    "Prime Video",
    "Software",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
    "Video Games",
    "Women's Fashion",
  ];

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
                <span>{location}</span> {/* Display the location here */}
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
                All
              </option>

              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <input type="text" placeholder="Search Amazon" />
          <span>
            <IoSearch className={classes.search_icon} />
          </span>
        </div>
        <div className={classes.nav_right_wrapper}>
          <div className={classes.lang}>
            <Link to="/language">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <span>EN</span>
              <RiArrowDropDownFill className={classes.dropdown_icon_small} />
            </Link>
          </div>
          <div className={classes.account}>
            <Link to="/auth">
              <div>
                {user ? (
                  <>
                    <p>Hello, {user.email.split("@")[0]}</p>
                    <span
                      onClick={() => auth.signOut()}
                      className={classes.signout}
                    >
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, sign in</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
          </div>
          <div className={classes.order}>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
          </div>
          <div className={classes.cart}>
            <Link to="/cart">
              <FiShoppingCart className={classes.cart_icon} />
              <span className={classes.added_items}>{basket.length}</span>
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
