import React from "react";
import { connect } from "react-redux";

import useRoute from "../../../hooks/useRoute";

// Components imports
import ContentItems from "./contentItems/ContentItems";

// Style imports
import classes from "./MainLayoutContent.module.scss";

const MainLayoutContent = () => {
  const { currentRoute } = useRoute();

  return (
    <main id="searchResults" className={`${classes.container}`}>
      <h2 className={`${classes.subtitle}`}>
        <span>{currentRoute.title}</span>
      </h2>
      {/* <Navigation /> */}
      <ContentItems />
    </main>
  );
};

const mapStateProps = (state) => {
  return {
    routes: state.routes,
    searchResults: state.searchResults,
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayFilteredPage: state.displayFilteredPage,
    displayTrendingPage: state.displayTrendingPage,
    singlePageType: state.singlePageType,
  };
};

export default connect(mapStateProps, null)(MainLayoutContent);
