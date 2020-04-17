import React from "react";
import Banner from "./img/banner.jpg";

const Certified = () => {
  return (
    <div className="certified" id="certify-article">
      <p className="certify-title">Certified by ...</p>
      <svg id="line-svg" viewBox="0 0 500 10">
        <path id="line" d="M 0 10 H 500" />
      </svg>
      <div className="certify-boxes">
        <div className="certify-box">
          <svg viewBox="0 0 100 20">
            <path className="hanger" d="M 0 20 L 50 1 L 100 20" />
          </svg>
          <img className="certify-box-image" src={Banner} alt="certificate" />
        </div>
        <div className="certify-box">
          <svg viewBox="0 0 100 20">
            <path className="hanger" d="M 0 20 L 50 1 L 100 20" />
          </svg>
          <img className="certify-box-image" src={Banner} alt="certificate" />
        </div>
        <div className="certify-box">
          <svg viewBox="0 0 100 20">
            <path className="hanger" d="M 0 20 L 50 1 L 100 20" />
          </svg>
          <img className="certify-box-image" src={Banner} alt="certificate" />
        </div>
        <div className="certify-box">
          <svg viewBox="0 0 100 20">
            <path className="hanger" d="M 0 20 L 50 1 L 100 20" />
          </svg>
          <img className="certify-box-image" src={Banner} alt="certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certified;
