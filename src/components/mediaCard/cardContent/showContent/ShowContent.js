import React from "react";

import useRoute from "../../../../hooks/useRoute";

import classes from "./ShowContent.module.scss";

export const ShowContent = (props) => {
  const { isSinglePage } = useRoute();

  let content = null;
  let cardTitle = null;
  let cardText = null;
  let date = null;

  if (!isSinglePage) {
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

  if (props.showOverview && !isSinglePage) {
    cardText = (
      <p className={`${classes.description}`}>
        {props.showOverview.substring(0, 100) + "..."}
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

export default ShowContent;
