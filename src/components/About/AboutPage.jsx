import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <PageHeader headerText="About me!" />
      <div className="page-title-container">
        <h1 className="page-title">I’m Sarah</h1>
        <hr />
      </div>

      <div id="about-text-container">
        <p className="about-text">
          A web developer and current DevMountain student living in Tempe, AZ. I
          spend my days learning how to make this site even better and trying
          different instant noodle flavors.
        </p>
        <br />
        <p className="about-text">
          You can check out my source code here and connect with me on LinkedIn
          here.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
