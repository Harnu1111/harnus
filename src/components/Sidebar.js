import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  return (
    <div className="Sidebar_container">
      <div className="Sidebar_wrapper">
        <span className="Sidebar_title">
          <h3>MENU</h3>

          <i>
            <CloseIcon />
          </i>
        </span>

        <div className="Sidebar_menu">
          <h3>Shop By Department</h3>
          <p>Smart Phones</p>
          <p>Televisions</p>
          <p>Laptops & Computers</p>
          <p>Speakers</p>
          <p>Video Games </p>

          <h3>Sections</h3>
          <p>Shop</p>
          <p>Products</p>
          <p>About Us</p>
          <p>Contact Us</p>

          <h3>Support</h3>
          <p>Visit Our Support</p>
          <p>online Support</p>

          <span className="Logout">
            <p>LogOut</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
