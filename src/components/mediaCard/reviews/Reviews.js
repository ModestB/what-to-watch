import React from "react";
import { useSelector } from "react-redux";

import classes from "./Reviews.module.scss";

import Review from "./review/Review";

const Reviews = (props) => {
  const reviewsData = useSelector((state) => state.reviewsData);

  return (
    <div
      className={`${
        props.reviewsData.length > 0 ? classes.reviews : ""
      } customScroll`}
    >
      {reviewsData.length ? (
        reviewsData.map((element) => (
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
