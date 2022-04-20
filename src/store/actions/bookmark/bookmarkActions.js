/* global chrome */
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS_STORAGE,
  GET_BOOKMARKS_STORAGE,
  UPDATE_BOOKMARKS_STORAGE,
} from "../../actionTypes/actionTypes";

export const setBookmarksStorage = (bookmarks) => ({
  type: SET_BOOKMARKS_STORAGE,
  payload: {
    bookmarks: bookmarks,
  },
});

export const updateBookmarksStorage = () => ({
  type: UPDATE_BOOKMARKS_STORAGE,
});

export const getBookmarksStorage = () => ({
  type: GET_BOOKMARKS_STORAGE,
});

export const addBookmark = (bookmarkDetails) => ({
  type: ADD_BOOKMARK,
  payload: {
    bookmarkDetails,
  },
});

export const removeBookmark = (bookmarkId) => ({
  type: REMOVE_BOOKMARK,
  payload: {
    bookmarkId,
  },
});
