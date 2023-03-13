import React from "react";

import { useState } from "react";

const Home = () => {
 const [hover, setHover] = useState;

 const handleMouseEnter = () => {
  setHover(true);
 }


    <div className="Home_container">
      <div className="Home_wrapper">
        <div className="Home_first">
          <h1>FIND YOUR NEXT FAVORITE GADGET</h1>
          <p>Shop Our Collections Now</p>
          <button>Start Shopping</button>
        </div>

        <div className="Home_banner">
          <a href="/" className="Grid" id="Grid1">
            <div className="Grid_text">
              <h4> Speakers</h4>
            </div>
          </a>
          <a href="/" className="Grid" id="Grid2">
            <div className="Grid_text">
              <h4> Laptops & Computers</h4>
            </div>
          </a>
          <div className="Grid" id="Grid3">
            <div className="Grid_text">
              <h4> Smart Phones</h4>
            </div>
          </div>
          <a href="/" className="Grid" id="Grid4">
            <div className="Grid_text">
              <h4>Televisions</h4>
            </div>
          </a>
          <a href="/" className="Grid" id="Grid5">
            <div className="Grid_text">
              <h4> Video Games</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
};

  
export default Home;
