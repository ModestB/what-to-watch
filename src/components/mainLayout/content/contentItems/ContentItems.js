import React from "react";
import { connect } from "react-redux";

import useRoute from "../../../../hooks/useRoute";

// Components imports
import MediaCard from "../../../mediaCard/MediaCard";

// Style imports
import classes from "./ContentItems.module.scss";

const ContentItems = ({
  displayedResults,
  displayFilteredPage,
  singlePageType,
}) => {
  const { isSinglePage } = useRoute();

  return (
    <div
      className={[
        classes.container,
        isSinglePage ? classes.singlePage : "",
        "customScroll",
      ].join(" ")}
    >
      {displayedResults.current.map((element) => (
        <MediaCard
          key={element.id}
          title={element.title || element.original_name}
          overview={element.overview}
          posterPath={element.poster_path}
          rating={element.vote_average}
          date={element.release_date || element.first_air_date}
          mediaType={element.media_type}
          element={element}
        />
      ))}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    displayedResults: state.displayedResults,
    displayFilteredPage: state.displayFilteredPage,
    singlePageType: state.singlePageType,
  };
};

export default connect(mapStateProps, null)(ContentItems);
