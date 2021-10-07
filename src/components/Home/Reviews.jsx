import React from "react";
import ReviewsText from "./ReviewsText.json";
import Review from "./Review";

const Reviews = () => {
  const reviews = ReviewsText.map((reviewData) => {
    return (
      <Review
        key={reviewData.id}
        noodleName={reviewData.noodleName}
        rating={reviewData.rating}
        bodyText={reviewData.bodyText}
        noodleImg={reviewData.noodleImg}
      />
    );
  });

  return <div>{reviews}</div>;
};

export default Reviews;
