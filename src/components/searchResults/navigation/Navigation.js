import React from "react";
import { connect } from "react-redux";

// Action Types
import {
  showPreviousResults,
  getTrendingShows,
  getShowsByGenre,
} from "../../../store/actions/actions";

import classes from "./Navigation.module.scss";

export function Navigation(props) {
  let similarButton = null;
  let navigation = null;

  if (props.displaySinglePage) {
    if (props.singlePageType !== "person") {
      let genreIds = null;
      if (!props.displayedResults[0].genre_ids) {
        genreIds = props.displayedResults[0].genres.map((genre) => {
          return genre.id;
        });
      } else {
        genreIds = props.displayedResults[0].genre_ids;
      }
      similarButton = (
        <button
          className="btn btn--primary btn--small"
          onClick={() => props.getShowsByGenre(genreIds, props.singlePageType)}
        >
          Similar
        </button>
      );
    }
    navigation = (
      <header className={`${classes.navigation}`}>
        <button
          className="btn btn--danger btn--small"
          onClick={() => props.showPreviousResults([...props.searchResults])}
        >
          Go back
        </button>
        <button
          className="btn btn--primary btn--small"
          onClick={() => props.getTrendingShows()}
        >
          Trending
        </button>

        {props.displaySinglePage ? similarButton : null}
      </header>
    );
  }

  return navigation;
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    singlePageType: state.singlePageType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPreviousResults: (prevResults) =>
      dispatch(showPreviousResults(prevResults)),
    getTrendingShows: () => dispatch(getTrendingShows()),
    getShowsByGenre: (genreIds, singlePageType) =>
      dispatch(getShowsByGenre(genreIds, singlePageType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
