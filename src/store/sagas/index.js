import { takeEvery, takeLatest } from "redux-saga/effects";

import * as actionsTypes from "../actionTypes/actionTypes";

import {
  getBookmarksStorageSaga,
  addBookmarkSaga,
  removeBookmarkSaga,
} from "./bookmark/bookmarkSaga";
import { getExtraShowInfoSaga } from "./extraShowInfo/extraShowInfoSaga";
import { initFilterSinglePageSaga } from "./filterSinglePage/filterSinglePageSaga";
import { getSearchResultsSaga } from "./searchResults/searchResultsSaga";
import { getSearchSuggestionsSaga } from "./searchSuggestions/searchSuggestionsSaga";
import { getShowByIdSaga } from "./showById/showByIdSaga";
import { getTrendingShowsSaga } from "./trendingShows/trendingShowsSaga";
export function* watchBookmarks() {
  yield takeEvery(actionsTypes.GET_BOOKMARKS_STORAGE, getBookmarksStorageSaga);
  yield takeEvery(actionsTypes.ADD_BOOKMARK, addBookmarkSaga);
  yield takeEvery(actionsTypes.REMOVE_BOOKMARK, removeBookmarkSaga);
}

export function* watchExtraShowInfo() {
  yield takeEvery(actionsTypes.GET_EXTRA_SHOW_INFO, getExtraShowInfoSaga);
}

export function* watchFilterSinglePage() {
  yield takeEvery(
    actionsTypes.INIT_FILTER_SINGLE_PAGE,
    initFilterSinglePageSaga
  );
}

export function* watchSearchResults() {
  yield takeEvery(actionsTypes.GET_SEARCH_RESULTS, getSearchResultsSaga);
}

export function* watchSearchSuggestions() {
  yield takeLatest(
    actionsTypes.GET_SEARCH_SUGGESTIONS,
    getSearchSuggestionsSaga
  );
}

export function* watchShowById() {
  yield takeEvery(actionsTypes.GET_SHOW_BY_ID, getShowByIdSaga);
}

export function* watchTrendingShows() {
  yield takeEvery(actionsTypes.GET_TRENDING_SHOWS, getTrendingShowsSaga);
}
