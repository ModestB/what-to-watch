import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { APIT_MULTI_SEARCH_URL } from "../../../constants";

export function* getSearchResultsSaga(action) {
  yield put(actions.requestSearchResults());

  const searchResultPromise = new Promise((resolve, reject) => {
    fetch(APIT_MULTI_SEARCH_URL + action.payload.inputValue)
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
