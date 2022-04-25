import React from "react";
import { useSelector } from "react-redux";

import classes from "./Reviews.module.scss";

import Review from "./review/Review";

const Reviews = () => {
  const reviews = useSelector((state) => state.extraInfo.reviews);

  return (
    <div className={`${classes.reviews} customScroll`}>
      {reviews.length ? (
        reviews.map((element) => (
          <Review
            key={element.id}
            author={element.author}
            content={element.content}
          />
        ))
      ) : (
        <h6>No Reviews</h6>
      )}
    </div>
  );
};

export default Reviews;
