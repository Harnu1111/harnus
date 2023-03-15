import React from "react";
import Records from "../Records.json";
import Phone from "../IMAGES/pro-img/6427076_rd.jpeg";
import "../App.css";

const Line = () => {
  return (
    <div className="RecentlyAdded">
      <h1>Recently Added</h1>
      <div className="Recently">
        {Records &&
          Records.map((record) => {
            return (
              <div key={record.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <img
                        src={"../IMAGES/pro-img/6472835_sd.png"}
                        alt="phone"
                      />

                      <div className="Recently_text">
                        <h3>{record.name}</h3>
                        <p>{record.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>{record.newItemPrice}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Line;
