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
      <div>
        <h2>Noodle Reviews</h2>
        <hr />
      </div>

      {reviews}
    </>
  );
};

export default Reviews;
