import {
  REQUEST_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS,
} from "../../actionTypes/actionTypes";

export const requestSearchResults = () => ({
  type: REQUEST_SEARCH_RESULTS,
});

export const setSearchResults = (inputValue, searchResults) => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    inputValue,
    searchResults,
  },
});

export const getSearchResults = (inputValue) => ({
  type: GET_SEARCH_RESULTS,
  payload: {
    inputValue,
  },
});
