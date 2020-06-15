import React, { Component } from "react";
import { connect } from "react-redux";

// Components imports
import Card from "./card/Card";
import Navigation from "./navigation/Navigation";

// Style imports
import classes from "./SearchResults.module.scss";

const SearchResults = (props) => {
  let resultToDisplay = null;
  let searchResultClasses = null;

  resultToDisplay = props.displayedResults.map((element) => {
    let card = null;
    switch (element.media_type) {
      case "movie":
        card = (
          <Card
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
          <Card
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
          <Card
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
          <Card
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

  if (props.displaySinglePage && !props.displayFilteredPage) {
    if (props.singlePageType === "movie") {
      resultToDisplay = (
        <Card
          key={props.displayedResults[0].id}
          title={props.displayedResults[0].title}
          overview={props.displayedResults[0].overview}
          posterPath={props.displayedResults[0].poster_path}
          rating={props.displayedResults[0].vote_average}
          date={props.displayedResults[0].release_date}
          mediaType={props.singlePageType}
          element={props.displayedResults[0]}
        />
      );
    } else {
      resultToDisplay = (
        <Card
          key={props.displayedResults[0].id}
          title={props.displayedResults[0].original_name}
          overview={props.displayedResults[0].overview}
          posterPath={props.displayedResults[0].poster_path}
          rating={props.displayedResults[0].vote_average}
          date={props.displayedResults[0].first_air_date}
          mediaType={props.singlePageType}
          element={props.displayedResults[0]}
        />
      );
    }
  }

  if (!props.displaySinglePage) {
    searchResultClasses = `${classes.wrp} customScroll`;
  }

  return (
    <section id="searchResults" className={`${classes.container}`}>
      <div className={`${searchResultClasses}`}>
        <Navigation />
        {resultToDisplay}
      </div>
    </section>
  );
};

const mapStateProps = (state) => {
  return {
    searchResults: state.searchResults,
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayFilteredPage: state.displayFilteredPage,
    singlePageType: state.singlePageType,
  };
};

export default connect(
  mapStateProps,
  null
)(SearchResults);
