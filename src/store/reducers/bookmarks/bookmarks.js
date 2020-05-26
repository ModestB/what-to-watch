/* global chrome */
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS_STORAGE,
  UPDATE_BOOKMARKS_STORAGE,
} from "../../actionTypes/actionTypes";

// LOCAL STORAGE
const LS_BOOKMARKS = "wtwBookmarks";

function addBookmark(state, bookmarkDetails) {
  let bookmarks = [];
  if (!state) {
    bookmarks = [{ ...bookmarkDetails }];
  } else {
    bookmarks = [...state, { ...bookmarkDetails }];
  }
  return bookmarks;
}

function removeBookmark(state, bookmarkId) {
  return state.filter((bookmark) => {
    if (bookmark.id === bookmarkId) {
      return false;
    }
    return true;
  });
}

function updateBookmarksStorage(bookmarks) {
  if (process.env.NODE_ENV !== "production") {
    localStorage.setItem(LS_BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarks;
  }
  chrome.storage.sync.set({ LS_BOOKMARKS: bookmarks });
  return bookmarks;
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      return addBookmark(state, action.payload.bookmarkDetails);
    }

    case REMOVE_BOOKMARK: {
      return removeBookmark(state, action.payload.bookmarkId);
    }

    case SET_BOOKMARKS_STORAGE: {
      return action.payload.bookmarks;
    }

    case UPDATE_BOOKMARKS_STORAGE: {
      return updateBookmarksStorage(state);
    }

    default:
      return state;
  }
};
