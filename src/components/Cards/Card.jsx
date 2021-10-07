import React from "react";

const Card = ({ name, rating, bodyText, image }) => {
  console.log(image);
  return (
    <div className="review-card">
      <img src={image} alt="noodle_img" className="post-img" />
      <div className="reviews-text-container">
        <h2 className="noodle-name">{name}</h2>
        <p className="rating">{rating}</p>
        <p className="noodle-text">{bodyText}</p>
      </div>
    </div>
  );
};

export default Card;
