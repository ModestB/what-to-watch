import React from "react";

import useRoute from "../../../hooks/useRoute";

// Components imports
import ContentItems from "./contentItems/ContentItems";

// Style imports
import classes from "./MainLayoutContent.module.scss";

const MainLayoutContent = () => {
  const { currentRoute, isSinglePage } = useRoute();

  return (
    <main id="searchResults" className={`${classes.container}`}>
      {!isSinglePage && (
        <h2 className={`${classes.subtitle}`}>
          <span>{currentRoute.title}</span>
        </h2>
      )}

      {/* <Navigation /> */}
      <ContentItems />
    </main>
  );
};

export default MainLayoutContent;
