/* global chrome */
import React, { useEffect } from "react";

// Action Types
import {
  getTrendingShows,
  getBookmarksStorage,
} from "../../store/actions/actions";
import { useDispatch } from "react-redux";

// Style imports
import classes from "./App.module.scss";

import { searchSuggestionSelectHandler } from "../../assets/js/all";

// Components imports
import IconTv from "../../icons/js/Tv";
import MainLayout from "../mainLayout/MainLayout";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    searchSuggestionSelectHandler();
    dispatch(getTrendingShows());
    dispatch(getBookmarksStorage());
  }, []);

  return (
    <main className={`${classes.container} customScroll`}>
      <header className={`${classes.header}`}>
        <IconTv fill="#9E56FC" height="40px" width="40px" />
        <h1>
          <b>What</b> To Watch
        </h1>
      </header>
      <MainLayout />
    </main>
  );
};

export default App;
