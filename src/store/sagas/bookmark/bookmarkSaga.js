/* global chrome */
import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

function* setChromeResults(results) {
  if (typeof results.LS_BOOKMARKS !== "undefined") {
    yield put(actions.setBookmarksStorage(results.LS_BOOKMARKS));
  } else {
    yield put(actions.setBookmarksStorage([]));
  }
}

export function* getBookmarksStorageSaga(action) {
  if (process.env.NODE_ENV !== "production") {
    yield put(
      actions.setBookmarksStorage(
        JSON.parse(localStorage.getItem("LS_BOOKMARKS"))
      )
    );
  } else {
    const promise = new Promise((resolve, reject) => {
      chrome.storage.sync.get("LS_BOOKMARKS", (results) => {
        resolve(results);
      });
    });
    const results = yield promise;

    yield setChromeResults(results);
  }
}

export function* addBookmarkSaga(action) {
  yield put(actions.updateBookmarksStorage());
}

export function* removeBookmarkSaga(action) {
  yield put(actions.updateBookmarksStorage());
}
