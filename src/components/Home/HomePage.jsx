import React from "react";
import "./home-page.css";
import Cards from "../Cards/Cards";
import ReviewsText from "./ReviewsText.json";

const HomePage = () => {
  return (
    <>
      <div id="header-img">
        <div id="main-header">
          Your one stop for everything instant noodles.
        </div>
      </div>

      <div className="page-title-container">
        <h1 className="page-title">Noodle Reviews</h1>
        <hr />
      </div>

      <Cards cardData={ReviewsText} />
    </>
  );
};

export default HomePage;
