import React from "react";

const Review = ({ noodleName, rating, bodyText, noodleImg }) => {
  return (
    <>
      <div>
        <h2>{noodleName}</h2>
        <p className="rating">{rating}</p>
        <p className="noodle-text">{bodyText}</p>
      </div>

      <img
        src={`./noodleImages/${noodleImg}.jpg`}
        alt="noodle_img"
        className="post-img"
      />
    </>
  );
};

export default Review;
