import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const MULTI_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=`;

export function* getSearchResultsSaga(action) {
  yield put(actions.requestSearchResults());

  const searchResultPromise = new Promise((resolve, reject) => {
    fetch(MULTI_API + action.payload.inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      });
  });

  const searchResultsData = searchResultPromise;

  yield put(
    actions.setSearchResults(action.payload.inputValue, searchResultsData)
  );
}
