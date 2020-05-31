import {
  SET_SEARCH_SUGGESTIONS,
  GET_SEARCH_SUGGESTIONS,
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
} from "../../actionTypes/actionTypes";

export const focusOutSearchSuggestions = () => ({
  type: FOCUS_OUT_SEARCH_SUGEGSTIONS,
});

export function deleteSearchSuggestionsInput(input) {
  if (input) input.focus();
  return function(dispatch) {
    dispatch({
      type: DELETE_SEARCH_SUGGESTIONS_INPUT,
    });
  };
}

export const setSearchSuggestions = (inputValue, results) => ({
  type: SET_SEARCH_SUGGESTIONS,
  payload: {
    inputValue,
    results,
  },
});

export const getSearchSuggestions = (inputValue) => ({
  type: GET_SEARCH_SUGGESTIONS,
  payload: {
    inputValue,
  },
});
