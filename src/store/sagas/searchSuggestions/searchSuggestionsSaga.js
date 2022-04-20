import { put, delay } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { APIT_MULTI_SEARCH_URL } from "../../../constants";

export function* getSearchSuggestionsSaga(action) {
  yield delay(600);
  const value = action.payload.inputValue;
  const keywordRequest = `${APIT_MULTI_SEARCH_URL}${value}&page=1&include_adult=false`;

  const searchSuggestionsPromise = new Promise((resolve, reject) => {
    fetch(keywordRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      });
  });
  const searchSuggestionsResults = yield searchSuggestionsPromise;

  yield put(actions.setSearchSuggestions(value, searchSuggestionsResults));
}
