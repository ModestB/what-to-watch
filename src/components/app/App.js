/* global chrome */
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Action Types
import {
  getTrendingShows,
  getBookmarksStorage,
  getSearchResults,
} from "../../store/actions/actions";

// Style imports
import classes from "./App.module.scss";

import { searchSuggestionSelectHandler } from "../../assets/js/all";

// Container imports
import SearchForm from "../searchForm/SearchForm";

// Components imports
import SearchResults from "../searchResults/SearchResults";
import IconTv from "../../icons/js/Tv";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Bookmarks from "../bookmarks/Bookmarks";
import MovieDbSmall from "../../icons/js/MoviedbSmall";

const App = (props) => {
  useEffect(() => {
    searchSuggestionSelectHandler();
    props.getTrendingShows();
    props.getBookmarksStorage();
  }, []);

  let searchResult = null;
  let sectionTitle = null;

  if (props.searchInputValue !== null) {
    searchResult = (
      <div className={`${classes.noResults}`}>
        <p>No results</p>
        <button
          className="btn btn--primary btn--big"
          onClick={props.getTrendingShows}
        >
          Show Trending
        </button>
      </div>
    );
  }

  if (props.searchResults && props.searchResults.length > 0) {
    searchResult = <SearchResults />;
  }

  if (!props.displaySinglePage) {
    sectionTitle = (
      <h2 className={`${classes.subtitle}`}>
        <span>{props.displayTrendingPage ? "Trending" : "Results"}</span>
      </h2>
    );
  }

  return (
    <main className={`${classes.container} customScroll`}>
      <header
        className={`${classes.header}`}
        onClick={() =>
          !props.displayTrendingPage ? props.getTrendingShows() : null
        }
      >
        <IconTv fill="#9E56FC" height="40px" width="40px" />
        <h1>
          <b>What</b> To Watch
        </h1>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.logo}`}
        >
          <MovieDbSmall height="50px" width="50px" />
        </a>
      </header>
      <SearchForm />
      {sectionTitle}
      {props.loading ? <LoadingSpinner /> : searchResult}
      <Bookmarks />
    </main>
  );
};

const mapStateProps = (state) => {
  return {
    displaySinglePage: state.displaySinglePage,
    displayTrendingPage: state.displayTrendingPage,
    loading: state.loading,
    searchInputValue: state.searchInputValue,
    searchResults: state.searchResults,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    getTrendingShows: () => dispatch(getTrendingShows()),
    getBookmarksStorage: () => dispatch(getBookmarksStorage()),
    getSearchResults: (inputValue) => dispatch(getSearchResults(inputValue)),
  };
};

export default connect(
  mapStateProps,
  mapStateDispatch
)(App);
