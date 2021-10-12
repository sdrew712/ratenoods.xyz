import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Cards from "../Cards/Cards";
import UpgradesText from "./UpgradesText.json";
import PageTitle from "../PageTitle/PageTitle";

const UpgradesPage = () => {
  return (
    <>
      <PageHeader
        headerText="Make your noodles more of a meal."
        backgroundImage={`url("/images/backgrounds/upgraded-bowl.jpg")`}
      />

      <PageTitle titleText="Noodle Upgrades" />

      <Cards cardData={UpgradesText} />
    </>
  );
};

export default UpgradesPage;
