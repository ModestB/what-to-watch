import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

// Action Types
import { toggleBookmarks, removeBookmark } from "../../store/actions/actions";

import classes from "./Bookmarks.module.scss";

import BookmarkItem from "./bookmarkItem/BookmarkItem";
import HeartIcon from "../../icons/js/Heart";
import CloseIcon from "../../icons/js/Close";

export const Bookmarks = (props) => {
  const isInitialMount = useRef(true);
  let [heartKey, setHeartKey] = useState(0);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setHeartKey(heartKey + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookmarks]);

  let bookmarks = <p>No bookmarks</p>;

  if (props.bookmarks && props.bookmarks.length > 0) {
    bookmarks = props.bookmarks.map((bookmark) => {
      return (
        <BookmarkItem
          id={bookmark.id}
          key={bookmark.id}
          title={bookmark.title}
          mediaType={bookmark.mediaType}
          date={bookmark.date}
        />
      );
    });
  }
  return (
    <div
      className={`
        ${classes.container} 
        ${props.displayBookmarks ? classes.active : ""}
      `}
    >
      <header className={`${classes.header}`} onClick={props.toggleBookmarks}>
        <div className={`${classes.header__wrp}`}>
          <p className={`${classes.title}`}> To Watch</p>
          <HeartIcon
            key={heartKey > 1 ? heartKey : "0"}
            fill="#ffffff"
            width="30px"
            height="30px"
            className={classes.iconHeart}
          />
          <span className={`${classes.counter}`}>
            {props.bookmarks ? props.bookmarks.length : 0}
          </span>
        </div>

        <CloseIcon
          className={`${classes.iconClose} icon-close icon-close--light`}
          width="20px"
          height="20px"
        />
      </header>
      <div className={`${classes.body} customScroll customScroll--red`}>
        {bookmarks}
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    displayBookmarks: state.displayBookmarks,
    bookmarks: state.bookmarks,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    toggleBookmarks: () => dispatch(toggleBookmarks()),
    removeBookmark: (bookmarkId) => dispatch(removeBookmark(bookmarkId)),
  };
};

export default connect(mapStateProps, mapStateDispatch)(Bookmarks);
