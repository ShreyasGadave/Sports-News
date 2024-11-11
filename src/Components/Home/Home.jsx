import React from "react";
import Ball from "../../assets/Basket.png";
import Woman from "../../assets/woman-sport.png";
import Formula from "../../assets/formula.png";

import "./Home.css";

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="Hero-one">
        <img src={Ball} alt="" className="Side-img" />
      </div>
      <div className="Hero-two">
        <div className="heading">Today </div>
        
        <div className="image-card">
          <img src={Woman} alt="Runner" className="image" />
          <div className="text-overlay">
            <p className="date">Race98 - 03 June 2023</p>
            <p className="description">Ethiopian runners took the top four spots.</p>
          </div>
        </div>
        
        <div className="image-card">
          <img src={Formula} alt="Runner" className="image" />
          <div className="text-overlay">
            <p className="date">Race98 - 03 June 2023</p>
            <p className="description">Ethiopian runners took the top four spots.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
