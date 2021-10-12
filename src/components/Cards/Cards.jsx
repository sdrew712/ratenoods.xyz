import React from "react";
import Card from "./Card";

const Cards = ({ cardData }) => {
  const cards = cardData.map((data) => {
    return (
      <Card
        key={data.id}
        name={data.name}
        rating={data.rating}
        bodyText={data.bodyText}
        image={data.image}
      />
    );
  });

  return (
    <>
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default Cards;
