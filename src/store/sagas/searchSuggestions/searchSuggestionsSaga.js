import { put, delay } from "redux-saga/effects";
import axios from "../../../axios";
import * as actions from "../../actions/actions";

import { API_MULTI_SEARCH_URL } from "../../../constants";

export function* getSearchSuggestionsSaga(action) {
  yield delay(600);
  const value = action.payload.inputValue;
  const keywordRequest = `${API_MULTI_SEARCH_URL}${value}&page=1&include_adult=false`;

  const searchSuggestionsPromise = new Promise((resolve) => {
    axios.get(keywordRequest).then(({ data }) => {
      resolve(data.results);
    });
  });
  const searchSuggestionsResults = yield searchSuggestionsPromise;

  yield put(actions.setSearchSuggestions(value, searchSuggestionsResults));
}
