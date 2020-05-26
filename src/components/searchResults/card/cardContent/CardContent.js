import React from "react";

import ShowContent from "./showContent/ShowContent";
import PersonContent from "./personContent/PersonContent";

import classes from "./CardContent.module.scss";

export const CardContent = (props) => {
  let content = (
    <div className={`${classes.container}`}>
      {props.cardType !== "person" ? (
        <ShowContent
          showTitle={props.showTitle}
          showOverview={props.showOverview}
          showMediaType={props.showMediaType}
          showDate={props.showDate}
        />
      ) : (
        <PersonContent
          personName={props.personName}
          profileKnownFor={props.profileKnownFor}
        />
      )}
    </div>
  );
  return content;
};

export default CardContent;
