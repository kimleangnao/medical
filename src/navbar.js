import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#service-article">
              <i className="fas fa-list"></i> Services
            </a>
          </li>
          <li>
            <a href="#about-article">
              <i className="fas fa-comment-dots"></i> About
            </a>
          </li>
          <li>
            <a href="#certify-article">
              <i className="fas fa-certificate"></i> Certified
            </a>
          </li>
          <li>
            <a href="#map-article">
              <i className="fas fa-map-marked-alt"></i> Address
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
