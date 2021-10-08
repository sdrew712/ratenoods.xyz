import React from "react";
import "./page-title.css";

const PageTitle = ({ titleText }) => {
  return (
    <div className="page-title-container">
      <h1 className="page-title">{titleText}</h1>
      <hr />
    </div>
  );
};

export default PageTitle;
