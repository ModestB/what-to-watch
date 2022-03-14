import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import classes from "./BookmarkItem.module.scss";

import HeartIcon from "../../../../../icons/js/Heart";
import SidebarItem from "../SidebarItem";

export const BookmarksItem = (props) => {
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

  return (
    <SidebarItem title="Bookmarks" route="bookmarks">
      <HeartIcon
        key={heartKey > 1 ? heartKey : "0"}
        fill="#ffffff"
        width="30px"
        height="30px"
        className={classes.iconHeart}
      />
    </SidebarItem>
  );
};

const mapStateProps = (state) => {
  return {
    bookmarks: state.bookmarks,
  };
};

export default connect(mapStateProps)(BookmarksItem);
