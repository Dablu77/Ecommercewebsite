import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="logo193.png" />
      </Link>

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search items Online Quick Shop"
        />
        <i className="fas fa-search" id="header_searchIcon"></i>
      </div>

      <div className="header_nav">
        <Link to="login">
          <div className="header_option">
            <span className="header_optionLineOne">
              <i class="fas fa-user-alt"></i>
            </span>

            <span className="header_optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="orders">
          <div className="header_option">
            <span className="header_optionLineOne">
              <i className="fa-solid fa-box-archive"></i>
            </span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="reals">
          <div className="header_option">
            <span className="header_optionLineOne">
              <i class="fas fa-video"></i>
            </span>
            <span className="header_optionLineTwo">Reals</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <i className="fa-solid fa-bag-shopping"></i>

            <span
              className="header_optionLineTwo 
                header_basketCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
