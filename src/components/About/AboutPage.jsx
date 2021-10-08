import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <PageHeader headerText="About me!" />

      <div id="about-text-container">
        <div className="page-title-container">
          <h1 className="page-title">Who am I?</h1>
          <hr />
        </div>
        <p className="about-text">
          I'm Sarah, a web developer and current DevMountain student living in
          Tempe, AZ. I spend my days learning how to make this site even better
          and trying different instant noodle flavors.
        </p>
        <br />
        <div className="page-title-container">
          <h1 className="page-title">Get in touch</h1>
          <hr />
        </div>
        <p className="about-text">
          You can check out my source code here and connect with me on LinkedIn
          here.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
