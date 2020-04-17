import React from "react";
import { render } from "react-dom";

import "./style.css";
import Banner from "./banner.js";
import About from "./about";
import Services from "./services";
import Certified from "./certified";
import Address from "./address";
import Footer from "./footer";
import Navbar from "./navbar";
const App = () => {
  return (
    <React.StrictMode>
      <div className="app">
        <Banner />
        <Navbar />
        <Services />
        <About />
        <svg id="about-svg" viewBox="0 0 500 30">
          <path
            d="M0 0 H 500  L 250 30Z "
            fill="HSL(202, 29%, 49%)"
            strokeWidth="0.01em"
            stroke="HSL(202, 29%, 49%)"
          />
        </svg>
        <Certified />
        <Address />
        <Footer />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
