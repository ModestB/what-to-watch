import React from "react";
import { connect } from "react-redux";

// Action Types
import { getShowById } from "../../../../store/actions/actions";

import classes from "./KnowForList.module.scss";

const knowForList = (props) => {
  let knownForList = props.elements.map((element) => {
    let item = null;
    switch (element.media_type) {
      case "movie":
        item = (
          <div className={`${classes.item}`} key={element.id}>
            <span className={`${classes.badge}`}>{element.release_date}</span>
            <span
              className={`${classes.title}`}
              onClick={() => props.getShowById(element.id, element.media_type)}
            >
              {element.title}
            </span>
          </div>
        );
        break;
      case "tv":
        item = (
          <div className={`${classes.item}`} key={element.id}>
            <span className={`${classes.badge}`}>{element.first_air_date}</span>
            <span
              className={`${classes.title}`}
              onClick={() => props.getShowById(element.id, element.media_type)}
            >
              {element.name}
            </span>
          </div>
        );
        break;
      default:
        item = null;
    }
    return item;
  });
  return (
    <section className={`${classes.container} customScroll`}>
      {knownForList}
    </section>
  );
};

const mapStateDispatch = (dispatch) => {
  return {
    getShowById: (showId, mediaType) =>
      dispatch(getShowById(showId, mediaType)),
  };
};

export default connect(null, mapStateDispatch)(knowForList);
