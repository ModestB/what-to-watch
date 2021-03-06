import React from "react";
import { connect } from "react-redux";

// Action Types
import {
  getShowById,
  toggleBookmarks,
  removeBookmark,
} from "../../../store/actions/actions";

import classes from "./BookmarkItem.module.scss";
import CloseIcon from "../../../icons/js/Close";

export const BookmarkItem = React.memo(function BookmarkItem(props) {
  function clickHandler() {
    props.toggleBookmarks();
    props.getShowById(props.id, props.mediaType);
  }

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.title}`} onClick={clickHandler}>
        {`${props.title} (${props.date})`}
      </div>

      <CloseIcon
        className="icon-close icon-close--danger"
        onClick={() => props.removeBookmark(props.id)}
        width="20px"
        height="20px"
      />
    </div>
  );
});

const mapStateDispatch = (dispatch) => {
  return {
    getShowById: (showId, mediaType) =>
      dispatch(getShowById(showId, mediaType)),
    toggleBookmarks: () => dispatch(toggleBookmarks()),
    removeBookmark: (bookmarkId) => dispatch(removeBookmark(bookmarkId)),
  };
};

export default connect(null, mapStateDispatch)(BookmarkItem);
