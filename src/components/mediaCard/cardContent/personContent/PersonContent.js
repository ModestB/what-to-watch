import React from "react";

import { connect } from "react-redux";

import useRoute from "../../../../hooks/useRoute";

import KnowForList from "../../knowForList/KnowForList";
import classes from "./PersonContent.module.scss";

export const PersonContent = (props) => {
  const { isSinglePage } = useRoute();
  let content = null;
  let name = null;
  let bodyContent = null;

  name = (
    <div
      className={`${[
        classes.name,
        !isSinglePage ? classes.nameShort : null,
      ].join(" ")}`}
    >
      {props.personName}
    </div>
  );

  if (props.profileKnownFor) {
    bodyContent = (
      <div>
        <p className={`${classes.title}`}>Known for </p>
        <KnowForList elements={props.profileKnownFor} />
      </div>
    );
  }

  if (isSinglePage) {
    bodyContent = (
      <div>
        <p className={`${classes.title}`}>Known for </p>
        <p className={`${classes.text}`}>
          {props.profileDetails.known_for_department
            ? props.profileDetails.known_for_department
            : "-"}
        </p>
        <p className={`${classes.title}`}>Birthday </p>
        <p className={`${classes.text}`}>
          {props.profileDetails.birthday ? props.profileDetails.birthday : "-"}
        </p>
        <p className={`${classes.title}`}>Place Of Birth</p>
        <p className={`${classes.text}`}>
          {props.profileDetails.place_of_birth
            ? props.profileDetails.place_of_birth
            : "-"}
        </p>
      </div>
    );
  }

  content = (
    <React.Fragment>
      {name}
      {bodyContent}
    </React.Fragment>
  );
  return content;
};

const mapStateProps = (state) => {
  return {
    profileDetails: state.profileDetails,
  };
};

export default connect(mapStateProps, null)(PersonContent);
