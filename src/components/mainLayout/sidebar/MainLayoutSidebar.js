import React from "react";

import BookmarksItem from "./items/bookmarkItem/BookmarkItem";
import SearchItem from "./items/searchItem/SearchItem";
import TrendingItem from "./items/trendingItem/TrendingItem";

import classes from "./MainLayoutSidebar.module.scss";

const MainLayoutSidebar = (props) => {
  return (
    <aside className={`${classes.aside}`}>
      <TrendingItem />
      <BookmarksItem />
      <SearchItem />
    </aside>
  );
};

export default MainLayoutSidebar;
