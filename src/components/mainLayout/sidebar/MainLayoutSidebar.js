import React from "react";
import useRoute from "../../../hooks/useRoute";

import BookmarksItem from "./items/bookmarkItem/BookmarkItem";
import SearchItem from "./items/searchItem/SearchItem";
import TrendingItem from "./items/trendingItem/TrendingItem";
import BackItem from "./items/backItem/BackItem";
import MovieDbSmall from "../../../icons/js/MoviedbSmall";

import classes from "./MainLayoutSidebar.module.scss";

const MainLayoutSidebar = () => {
  const { isSinglePage } = useRoute();

  return (
    <aside className={`${classes.aside}`}>
      <SearchItem />
      <BookmarksItem />
      <TrendingItem />
      {isSinglePage && <BackItem />}

      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes.logo}`}
      >
        <MovieDbSmall />
      </a>
    </aside>
  );
};

export default MainLayoutSidebar;
