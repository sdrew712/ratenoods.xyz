import React from "react";
import Cards from "../Cards/Cards";
import ReviewsText from "./ReviewsText.json";
import PageTitle from "../PageTitle/PageTitle";
import PageHeader from "../PageHeader/PageHeader";

const HomePage = () => {
  return (
    <>
      <PageHeader
        headerText="Your one stop for everything instant noodles."
        backgroundImage="noodleheader.jpg"
      />

      <PageTitle
        titleText="Noodle Reviews"
        pageDescription="Here are all of my instant noodle reviews, complete with an overall rating for each!"
      />

      <Cards cardData={ReviewsText} />
    </>
  );
};

export default HomePage;
