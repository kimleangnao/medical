import React from "react";

import Map from "./img/map.jpg";

const Address = () => {
  return (
    <div className="address" id="map-article">
      <p className="address-title">You can find us here ...</p>
      <div className="address-wrapper">
        <img className="address-map" src={Map} alt="Map" />
        <div className="address-tel">
          <a className="address-phone" href="tel:(408)798-2088">
            Tel: (408) 798-2088
          </a>
          <address className="address-num">
            <a
              href="https://www.google.com/maps/place/Kelly+Park+Medical+Clinic+Inc/@37.3285565,-121.8633884,17z/data=!3m1!4b1!4m5!3m4!1s0x808e332b461f330b:0xbb2e2545160245e0!8m2!3d37.3285523!4d-121.8611944"
              rel="noopener noreferrer"
              target="_blank"
            >
              749 Story Rd #20 <br /> San Jose, CA <br /> 95122 Zip-Code
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Address;
