import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <p className="footer-place">Kelly Park Medical Clinic</p>
        <p className="footer-name">Dr. Peter Linh Nugyen</p>

        <a className="footer-phone" href="tel:(408)798-2088">
          Call us : (408) 798-2088
        </a>
      </div>
      <div className="right-footer">
        <h1 className="right-footer-h1">Schedule</h1>
        <ul className="right-footer-ul">
          <li className="right-footer-ul-li">Mon: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Tue: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Wed: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Thu: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Fri: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Sat: 8:00AM to 9:00PM</li>
          <li className="right-footer-ul-li">Sun: Closed</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
