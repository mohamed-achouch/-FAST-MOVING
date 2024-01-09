import React from "react";
import "../assets/styles/trick.css";
import mp from  '../assets/images/trick.png'
import TopHead from "./TopHead";
import moving_pricing from "../assets/images/tricks/moving_pricing.png";
import house_moving from "../assets/images/tricks/house_moving.png";

const Trick = () => {
  return (
    <div className="trick">
      <div className="container">
        <TopHead content="Moving Tips & Tricks" seeall={true} />
       <div className="list_box">
       <div className="box">
          <img className="moving_desktop" src={moving_pricing} alt="" />
          <img className="moving_mobile" src={mp} alt="" />
          <div className="info">
            <h1>Moving Pricing</h1>
            <div className="line"></div>
            <p>
              A moving service or hiring a relocating company is not usually
              cheap irrespective of how far you will be moving. But most people
              who have.
            </p>
            <span>Reed More</span>
          </div>
        </div>
        <div className="box" id="box">
          <img src={house_moving} alt="" />
          <div className="info">
            <h1>Top Things to do After House Moving</h1>
            <div className="line"></div>
            <p>
            Moving is a stress for most people. So once the move is completed, it is likely that you will be relieved
            </p>
            <span>Reed More</span>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Trick;
