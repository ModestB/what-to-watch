import React from 'react';

// Style imports
import classes from "./ReviewCard.module.scss";

const reviewCard = ( props ) => {
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.body}`}>
        <div className={`${classes.title}`}>
          {props.author}
        </div>
        <p className={`${classes.text}`}>
          {props.content}
        </p>
      </div>
    </div>
  )
};

export default reviewCard;