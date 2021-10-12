import React from "react";
import "./page-title.css";

const PageTitle = ({ titleText, pageDescription }) => {
  return (
    <div className="page-title-container">
      <h1 className="page-title">{titleText}</h1>
      {pageDescription && <p className="page-description">{pageDescription}</p>}
      <hr />
    </div>
  );
};

export default PageTitle;
