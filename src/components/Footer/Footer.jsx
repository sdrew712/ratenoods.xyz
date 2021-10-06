import React from "react";
import "./footer.css";
import linkedInLogo from "./linkedin-logo.png";
import gitHubLogo from "./github-logo-64px.png";

const Footer = () => {
  return (
    <div id="footer">
      <div>Made with ♥ by Sarah Drew</div>
      <div id="icon-container">
        <img src={linkedInLogo} alt="linkedin logo" id="linkedin-logo" />
        <img src={gitHubLogo} alt="github logo" id="github-logo" />
      </div>
    </div>
  );
};

export default Footer;
