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
        backgroundImage={`url("/images/backgrounds/noodleheader.jpg")`}
      />

      <PageTitle titleText="Noodle Reviews" />

      <Cards cardData={ReviewsText} />
    </>
  );
};

export default HomePage;
