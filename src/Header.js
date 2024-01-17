import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import * as ReactDOM from "react-dom/client";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="the-header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-seachinput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header-nav">
        <div className="headre-option">
          <span className="header_optionLineone">Hello</span>
          <span className="header_optionLinetwo">Sign In</span>
        </div>
        <div className="headre-option">
          <span className="header_optionLineone">return</span>
          <span className="sheader_optionLinetwo">orders</span>
        </div>
        <div className="headre-option">
          <span className="header_optionLineone">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLinetwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
