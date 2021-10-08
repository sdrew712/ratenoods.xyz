import React from "react";
import "./footer.css";
import linkedInLogo from "./linkedin-logo.png";
import gitHubLogo from "./github-logo.png";

const Footer = () => {
  return (
    <div id="footer">
      <div>Made with ♥ by Sarah Drew</div>
      <div id="icon-container">
        <a href="https://www.linkedin.com/in/sarah-drew-dev/">
          <img src={linkedInLogo} alt="linkedin logo" id="linkedin-logo" />
        </a>
        <a href="https://github.com/sdrew712/">
          <img src={gitHubLogo} alt="github logo" id="github-logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
