import React from "react";

import { useDispatch } from "react-redux";

import { getShowById, removeBookmark } from "../../../store/actions/actions";

import useRoute from "../../../hooks/useRoute";
import classes from "./BookmarkItem.module.scss";
import CloseIcon from "../../../icons/js/Close";

export const BookmarkItem = ({ id, mediaType, title, date }) => {
  const { changeRoute } = useRoute();
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(getShowById(id, mediaType));
    changeRoute("single");
  }

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.title}`} onClick={clickHandler}>
        {`${title} (${date})`}
      </div>

      <CloseIcon
        className="icon-close icon-close--danger"
        onClick={() => dispatch(removeBookmark(id))}
        width="20px"
        height="20px"
      />
    </div>
  );
};

export default BookmarkItem;
