import React from "react";
import "./page-header.css";

const PageHeader = ({ headerText, backgroundImage }) => {
  return (
    <div className="header-img" style={{ backgroundImage: backgroundImage }}>
      <div className="header-text">{headerText}</div>
    </div>
  );
};

export default PageHeader;
