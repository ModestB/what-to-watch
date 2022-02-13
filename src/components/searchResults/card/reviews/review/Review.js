import React from "react";

// Style imports
import classes from "./Review.module.scss";

const review = (props) => {
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.body}`}>
        <div className={`${classes.title}`}>{props.author}</div>
        <p className={`${classes.text}`}>{props.content}</p>
      </div>
    </div>
  );
};

export default review;
