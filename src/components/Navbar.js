import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const Navbar = () => {
  return (
    <div classname="Navbar_container">
      <div classname="Navbar_wrapper">
        <i>
          <button>
            <MenuOutlinedIcon />
          </button>
        </i>

        <div classname="Navbar_links">
          <a href="shop">Shop</a>
          <a href="products">Products</a>
          <a href="about">About Us</a>
          <a href="contact">Contact US</a>
        </div>

        <a href="/home">
            <h3>
                HARNUS.
            </h3>

            <div classname="Navbar_left">
                <input placeholder="Search">
                    <SearchOutlinedIcon/>
                </input>

                <span classname="cart">
                    <ShoppingCartOutlinedIcon/>
                    <p>1</p>
                </span>

                <button>
                    Login
                </button>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
