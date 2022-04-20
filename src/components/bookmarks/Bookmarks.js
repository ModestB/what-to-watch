import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import classes from "./Bookmarks.module.scss";

import BookmarkItem from "./bookmarkItem/BookmarkItem";

export const Bookmarks = (props) => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const isInitialMount = useRef(true);
  let [heartKey, setHeartKey] = useState(0);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setHeartKey(heartKey + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks]);

  return (
    <div className={`${classes.container} customScroll`}>
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => {
          return (
            <BookmarkItem
              id={bookmark.id}
              key={bookmark.id}
              title={bookmark.title}
              mediaType={bookmark.mediaType}
              date={bookmark.date}
            />
          );
        })
      ) : (
        <p>No bookmarks</p>
      )}
    </div>
  );
};

export default Bookmarks;
