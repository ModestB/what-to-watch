import { put, delay } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

export function* getSearchSuggestionsSaga(action) {
  yield delay(600);
  let value = action.payload.inputValue;
  let keywordRequest = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;

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

export function* deleteSearchSuggestionsInputSaga(action) {
  if (action.payload.input) yield action.payload.input.focus();
}
