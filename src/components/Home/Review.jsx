import React from "react";

const Review = ({ noodleName, rating, bodyText, noodleImg }) => {
  return (
    <div className="review-card">
      <img
        src={`./noodleImages/${noodleImg}.jpg`}
        alt="noodle_img"
        className="post-img"
      />
      <div className="reviews-text-container">
        <h2 className="noodle-name">{noodleName}</h2>
        <p className="rating">{rating}</p>
        <p className="noodle-text">{bodyText}</p>
      </div>
    </div>
  );
};

export default Review;
