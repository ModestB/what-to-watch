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

// Components imports
import IconTv from "../../icons/js/Tv";
import MovieDbSmall from "../../icons/js/MoviedbSmall";
import MainLayout from "../mainLayout/MainLayout";

const App = (props) => {
  useEffect(() => {
    searchSuggestionSelectHandler();
    props.getTrendingShows();
    props.getBookmarksStorage();
  }, []);

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
      <MainLayout />
    </main>
  );
};

const mapStateProps = (state) => {
  return {
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

export default connect(mapStateProps, mapStateDispatch)(App);
