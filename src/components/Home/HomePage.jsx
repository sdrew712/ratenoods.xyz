import React from "react";
import "./home-page.css";
import Reviews from "./Reviews";

const HomePage = () => {
  return (
    <>
      <div id="header-img">
        <div id="header-text">
          Your one stop for everything instant noodles.
        </div>
      </div>
      <div className="page-container">
        <Reviews />
      </div>
    </>
  );
};

export default HomePage;
