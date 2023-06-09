import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css";
const Navbar = () => {
  return (
    <div className="Navbar_container">
      <div className="Navbar_wrapper">
        <button>
          <i className="icon">
            <AiOutlineMenu />
          </i>
        </button>

        <div className="Navbar_links">
          <a href="shop">Shop</a>
          <a href="products">Products</a>
          <a href="about">About us</a>
          <a href="contact">Contact us</a>
        </div>

        <div className="Navbar_center">
          <a href="/home">
            <h3>HARNUS.</h3>
          </a>
        </div>
        <div className="Navbar-right">
          <div className="Navbar_search" id="search">
            <input
              placeholder="Search..."
              type="search"
              id="search_input"
            ></input>
            <button>
              <i id="search_btn">
                <AiOutlineSearch />
              </i>
            </button>
          </div>

          <span className="Navbar-cart">
            <button id="cart_btn">
              <i id="cart">
                <AiOutlineShoppingCart />
              </i>
              <p>5</p>
            </button>
          </span>
          <span className="login" id="login">
            <button>
              <p>Login</p>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
