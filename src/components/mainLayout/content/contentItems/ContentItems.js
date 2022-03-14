import React from "react";
import { connect } from "react-redux";

// Components imports
import MediaCard from "../../../mediaCard/MediaCard";

// Style imports
import classes from "./ContentItems.module.scss";

const ContentItems = ({
  displayedResults,
  displaySinglePage,
  displayFilteredPage,
  singlePageType,
}) => {
  let resultToDisplay = null;

  resultToDisplay = displayedResults.map((element) => {
    let card = null;
    switch (element.media_type) {
      case "movie":
        card = (
          <MediaCard
            key={element.id}
            title={element.title}
            overview={element.overview}
            posterPath={element.poster_path}
            rating={element.vote_average}
            date={element.release_date}
            mediaType={element.media_type}
            element={element}
          />
        );
        break;
      case "person":
        card = (
          <MediaCard
            key={element.id}
            cardType="person"
            name={element.name}
            posterPath={element.profile_path}
            knownFor={element.known_for}
            element={element}
          />
        );
        break;
      case "tv":
        card = (
          <MediaCard
            key={element.id}
            title={element.original_name}
            overview={element.overview}
            posterPath={element.poster_path}
            rating={element.vote_average}
            date={element.first_air_date}
            mediaType={element.media_type}
            element={element}
          />
        );
        break;
      default:
        card = (
          <MediaCard
            key={element.id}
            title={
              element.original_name
                ? element.original_name
                : element.original_title
            }
            overview={element.overview}
            posterPath={element.poster_path}
            rating={element.vote_average}
            date={
              element.first_air_date
                ? element.first_air_date
                : element.release_date
            }
            mediaType={element.original_name ? "tv" : "movie"}
            element={element}
          />
        );
    }

    return card;
  });

  if (displaySinglePage && !displayFilteredPage) {
    if (singlePageType === "movie") {
      resultToDisplay = (
        <MediaCard
          key={displayedResults[0].id}
          title={displayedResults[0].title}
          overview={displayedResults[0].overview}
          posterPath={displayedResults[0].poster_path}
          rating={displayedResults[0].vote_average}
          date={displayedResults[0].release_date}
          mediaType={singlePageType}
          element={displayedResults[0]}
        />
      );
    } else {
      resultToDisplay = (
        <MediaCard
          key={displayedResults[0].id}
          title={displayedResults[0].original_name}
          overview={displayedResults[0].overview}
          posterPath={displayedResults[0].poster_path}
          rating={displayedResults[0].vote_average}
          date={displayedResults[0].first_air_date}
          mediaType={singlePageType}
          element={displayedResults[0]}
        />
      );
    }
  }

  return (
    <div className={`${classes.container} customScroll`}>{resultToDisplay}</div>
  );
};

const mapStateProps = (state) => {
  return {
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayFilteredPage: state.displayFilteredPage,
    singlePageType: state.singlePageType,
  };
};

export default connect(mapStateProps, null)(ContentItems);
