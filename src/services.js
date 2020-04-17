import React from "react";
import Banner from "./img/banner.jpg";

const Services = () => {
  return (
    <div className="services" id="service-article">
      <p className="services-title">Services</p>
      <div className="services-boxes">
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Disease Prevention</p>
        </div>
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Health Maintenance</p>
        </div>
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Counseling</p>
        </div>
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Patient Education</p>
        </div>
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Diagnosis</p>
        </div>
        <div className="services-box">
          <img
            className="services-box-image"
            src={Banner}
            alt="Disease Prevention"
          />
          <p className="services-box-name">Treatment</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
