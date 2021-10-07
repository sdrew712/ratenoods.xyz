import React from "react";
import "./home-page.css";
import Reviews from "./Reviews";

const HomePage = () => {
  return (
    <>
      <div id="header-img">
        <div id="main-header">
          Your one stop for everything instant noodles.
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default HomePage;
