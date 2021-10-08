import React from "react";
import "./card.css";

const Card = ({ name, rating, bodyText, image }) => {
  console.log(image);
  return (
    <div className="card">
      <img src={image} alt="noodle_img" className="card-img" />
      <div className="card-text-container">
        <h2 className="card-name">{name}</h2>
        <p className="rating">{rating}</p>
        <p className="card-text">{bodyText}</p>
      </div>
    </div>
  );
};

export default Card;
