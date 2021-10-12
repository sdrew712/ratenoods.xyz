import React from "react";
import "./page-header.css";

const PageHeader = ({ headerText, backgroundImage }) => {
  return (
    <div
      className="header-img"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url("/images/backgrounds/${backgroundImage}")`,
      }}
    >
      <div className="header-text">{headerText}</div>
    </div>
  );
};

export default PageHeader;
