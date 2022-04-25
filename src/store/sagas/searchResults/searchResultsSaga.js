import { put } from "redux-saga/effects";
import axios from "../../../axios";
import * as actions from "../../actions/actions";

import { API_MULTI_SEARCH_URL } from "../../../constants";

export function* getSearchResultsSaga(action) {
  yield put(actions.requestSearchResults());

  const searchResultPromise = new Promise((resolve) => {
    axios
      .get(API_MULTI_SEARCH_URL + action.payload.inputValue)
      .then(({ data }) => {
        resolve(data.results);
      });
  });

  const searchResultsData = yield searchResultPromise;

  yield put(
    actions.setSearchResults(action.payload.inputValue, searchResultsData)
  );
}
