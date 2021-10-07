import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Cards from "../Cards/Cards";
import UpgradesText from "./UpgradesText.json";

const UpgradesPage = () => {
  return (
    <>
      <PageHeader headerText="Make your noodles more of a meal." />

      <div className="page-title-container">
        <h1 className="page-title">Noodle Upgrades</h1>
        <hr />
      </div>

      <Cards cardData={UpgradesText} />
    </>
  );
};

export default UpgradesPage;
