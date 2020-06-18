import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

export function* getSearchResultsSaga(action) {
  const MULTI_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=`;

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

  const searchResultsData = yield searchResultPromise;

  yield put(
    actions.setSearchResults(action.payload.inputValue, searchResultsData)
  );
}
