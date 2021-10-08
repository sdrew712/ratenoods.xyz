import React from "react";
import "./home-page.css";
import Cards from "../Cards/Cards";
import ReviewsText from "./ReviewsText.json";
import PageTitle from "../PageTitle/PageTitle";

const HomePage = () => {
  return (
    <>
      <div id="header-img">
        <div id="main-header">
          Your one stop for everything instant noodles.
        </div>
      </div>

      <PageTitle titleText="Noodle Reviews" />

      <Cards cardData={ReviewsText} />
    </>
  );
};

export default HomePage;
