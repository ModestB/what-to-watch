import React from "react";

import { connect } from "react-redux";

import classes from "./ShowContent.module.scss";

export const ShowContent = (props) => {
  let content = null;
  let cardTitle = null;
  let cardText = null;
  let date = null;

  if (!props.displaySinglePage) {
    cardTitle = (
      <div className={`${classes.title}`} title={props.showTitle}>
        {props.showTitle.length > 40
          ? props.showTitle.substring(0, 40) + "..."
          : props.showTitle}
      </div>
    );
  } else {
    cardTitle = (
      <div className={`${classes.title}`} title={props.showTitle}>
        {props.showTitle}
      </div>
    );
  }

  if (props.showOverview && !props.displaySinglePage) {
    cardText = (
      <p className={`${classes.description}`}>
        {props.showOverview.substring(0, 130) + "..."}
      </p>
    );
  } else {
    cardText = (
      <p
        className={`${[classes.description, classes.descriptionOverview].join(
          " "
        )} customScroll`}
      >
        {props.showOverview}
      </p>
    );
  }

  if (props.mediaType === "movie") {
    date = <p className={`${classes.date}`}>Released Date: {props.showDate}</p>;
  } else {
    date = <p className={`${classes.date}`}>Air Date: {props.showDate}</p>;
  }

  content = (
    <React.Fragment>
      {cardTitle}
      {cardText}
      {date}
    </React.Fragment>
  );
  return content;
};

const mapStateProps = (state) => {
  return {
    displaySinglePage: state.displaySinglePage,
  };
};

export default connect(
  mapStateProps,
  null
)(ShowContent);
