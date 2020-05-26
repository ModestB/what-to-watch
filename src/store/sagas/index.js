import { takeEvery } from "redux-saga/effects";

import * as actionsTypes from "../actionTypes/actionTypes";

import {
  getBookmarksStorageSaga,
  addBookmarkSaga,
  removeBookmarkSaga,
} from "./bookmark/bookmarkSaga";
import { getExtraProfileInfoSaga } from "./extraProfileInfo/extraProfileInfoSaga";

export function* watchBookmarks() {
  yield takeEvery(actionsTypes.GET_BOOKMARKS_STORAGE, getBookmarksStorageSaga);
  yield takeEvery(actionsTypes.ADD_BOOKMARK, addBookmarkSaga);
  yield takeEvery(actionsTypes.REMOVE_BOOKMARK, removeBookmarkSaga);
}
export function* watchExtraProfileInfo() {
  yield takeEvery(actionsTypes.GET_EXTRA_PROFILE_INFO, getExtraProfileInfoSaga);
}
