import React from "react";
import useRoute from "../../../hooks/useRoute";

import BookmarksItem from "./items/bookmarkItem/BookmarkItem";
import SearchItem from "./items/searchItem/SearchItem";
import TrendingItem from "./items/trendingItem/TrendingItem";
import BackItem from "./items/backItem/BackItem";

import classes from "./MainLayoutSidebar.module.scss";

const MainLayoutSidebar = () => {
  const { isSinglePage } = useRoute();

  return (
    <aside className={`${classes.aside}`}>
      <TrendingItem />
      <BookmarksItem />
      <SearchItem />
      {isSinglePage && <BackItem />}
    </aside>
  );
};

export default MainLayoutSidebar;
