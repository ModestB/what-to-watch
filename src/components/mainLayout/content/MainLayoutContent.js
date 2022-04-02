import React from "react";

import { useSelector } from "react-redux";

import useRoute from "../../../hooks/useRoute";

// Components imports
import ContentItems from "./contentItems/ContentItems";
import SearchForm from "../../searchForm/SearchForm";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";

// Style imports
import classes from "./MainLayoutContent.module.scss";

const MainLayoutContent = () => {
  const { currentRoute, isSinglePage } = useRoute();
  const loading = useSelector((state) => state.loading);

  return (
    <main id="searchResults" className={`${classes.container}`}>
      {!isSinglePage && (
        <h2 className={`${classes.subtitle}`}>
          <span>{currentRoute.title}</span>
        </h2>
      )}

      {/* <Navigation /> */}

      {currentRoute.route === "search" && <SearchForm />}
      {loading ? <LoadingSpinner /> : <ContentItems />}
    </main>
  );
};

export default MainLayoutContent;
