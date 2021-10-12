import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-header">About me!</div>

      <div id="about-text-container">
        <PageTitle titleText="Who am I?" />
        <p className="about-text">
          I'm Sarah, a web developer and current DevMountain student living in
          Tempe, AZ. I spend my days learning how to make this site even better
          and trying different instant noodle flavors.
        </p>
        <br />
        <PageTitle titleText="Get in touch" />
        <p className="about-text">
          Check out my
          <a href="https://github.com/sdrew712/ratenoods.xyz">
            <b> source code </b>
          </a>
          and connect with me on
          <a href="https://www.linkedin.com/in/sarah-drew-dev/">
            <b> LinkedIn!</b>
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
