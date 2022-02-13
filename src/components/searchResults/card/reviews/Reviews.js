import React from "react";

import classes from "./Reviews.module.scss";

import Review from "./review/Review";

const reviews = (props) => {
  let content = null;
  let reviews = <h6>No Reviews</h6>;

  if (props.displayReviews) {
    if (props.reviewsData.length > 0) {
      reviews = props.reviewsData.map((element) => {
        return (
          <Review
            key={element.id}
            author={element.author}
            content={element.content}
          />
        );
      });
    }

    content = (
      <div
        className={`${
          props.reviewsData.length > 0 ? classes.reviews : ""
        } customScroll`}
      >
        {reviews}
      </div>
    );
  }

  return content;
};

export default reviews;
