import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action Types
import { addBookmark, removeBookmark } from "../../../store/actions/actions";

import classes from "./BookmarkBtn.module.scss";
import HeartIcon from "../../../icons/js/Heart";

const BookmarkBtn = (props) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let bookmark = null;

    if (bookmarks) {
      bookmark = bookmarks.find((boomark) => {
        return boomark.id === props.id;
      });
    }

    if (bookmark) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [bookmarks, props.id]);

  function clickHandler() {
    if (!active) {
      dispatch(
        addBookmark({
          id: props.id,
          title: props.title,
          date: props.date,
          mediaType: props.mediaType,
        })
      );
    } else {
      setActive(false);
      dispatch(removeBookmark(props.id));
    }
  }

  return (
    <HeartIcon
      className={`${classes.btn} ${active ? classes.active : ""}`}
      onClick={clickHandler}
      width="25px"
      height="25px"
    />
  );
};

export default BookmarkBtn;
