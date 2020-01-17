/* global chrome */
import {
  TOGGLE_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS_STORAGE,
  UPDATE_BOOKMARKS_STORAGE
} from '../../actionTypes/actionTypes';

// LOCAL STORAGE
const LS_BOOKMARKS = 'wtwBookmarks';

export const toggleBookmarks = () => ({
  type:  TOGGLE_BOOKMARKS
});

export const setBookmarksStorage = (bookmarks) => ({
  type:  SET_BOOKMARKS_STORAGE,
  payload: {
    bookmarks: bookmarks
  }
});

export const updateBookmarksStorage = () => ({
  type:  UPDATE_BOOKMARKS_STORAGE,
});

export function getBookmarksStorage(){
  return function(dispatch) {
    if (process.env.NODE_ENV !== 'production') {
      return dispatch(setBookmarksStorage(JSON.parse(localStorage.getItem(LS_BOOKMARKS))))
    };
  
    chrome.storage.sync.get(['LS_BOOKMARKS'], (result) => {      
      if(typeof result.LS_BOOKMARKS !== 'undefined'){
        return dispatch(setBookmarksStorage(result.LS_BOOKMARKS));
      }
      return dispatch(setBookmarksStorage([]))
    });
  }
}

export function addBookmark(bookmarkDetails) {
  return function(dispatch) {
    dispatch({
      type:  ADD_BOOKMARK,
      payload: {
        bookmarkDetails
      }
    })

    return  dispatch(updateBookmarksStorage())
  }
}

export function removeBookmark(bookmarkId) {
  return function(dispatch) {
    dispatch({
      type:  REMOVE_BOOKMARK,
      payload: {
        bookmarkId
      }
    })

    return  dispatch(updateBookmarksStorage())
  }
}