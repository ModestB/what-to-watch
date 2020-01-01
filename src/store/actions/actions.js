/* global chrome */
import {
  REQUEST_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
  FILTER_SINGLE_PAGE_END,
  SHOW_PREVIOUS_RESULTS,
  TOGGLE_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS_STORAGE,
  UPDATE_BOOKMARKS_STORAGE,
} from '../actionTypes/actionTypes';

import { getExtraShowInfo } from './api/extraShowInfoActions';

export * from './api/extraShowInfoActions';
export * from './api/trendingShowsActions';



// LOCAL STORAGE
const LS_BOOKMARKS = 'wtwBookmarks';

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const MULTI_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=`;


export const requestSearchResults = () => ({
  type:  REQUEST_SEARCH_RESULTS
});

export const setSearchResults = (inputValue, searchResults) => ({
  type:  SET_SEARCH_RESULTS,
  payload: {
    inputValue,
    searchResults
  }
});

export function getSearchResults(inputValue) {
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestSearchResults())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch( MULTI_API + inputValue )
      .then( (response) => {
        return response.json()
      })
      .then( ( data ) => {
        dispatch(setSearchResults(inputValue, data.results));
      })
  }
}

export const findShowById = (searchResults, mediaType) => ({
  type:  FIND_SHOW_BY_ID,
  payload: {
    searchResults,
    mediaType
  }
});


export function filterSinglePage (element, displayedResults) {
  return function(dispatch){
    dispatch({
      type:  FILTER_SINGLE_PAGE,
      payload: {
        itemId: element.id,
        displayedResults
      }
    });

    dispatch(getExtraShowInfo(element.id, element.media_type)
    )
  }
}

export const filterSinglePageEnd = (profileDetails, profileCredits) => ({
  type:  FILTER_SINGLE_PAGE_END,
  payload: {
    profileDetails,
    profileCredits
  }
});

export const showPreviousResults = (prevResults) => ({
  type:  SHOW_PREVIOUS_RESULTS,
  payload: {
    prevResults
  }
});

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

export function addBookmark(bookmarkDetails, ) {
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

