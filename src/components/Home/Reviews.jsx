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

  return (
    <>
      <div className="page-title-container">
        <h1 className="page-title">Noodle Reviews</h1>
        <hr />
      </div>

      <div id="reviews-container">{reviews}</div>
    </>
  );
};

export default Reviews;
