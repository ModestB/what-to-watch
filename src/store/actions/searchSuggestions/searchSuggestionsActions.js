import {
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS_TIMEOUT,
  CLEAR_SEARCH_SUGGESTIONS_TIMEOUT,
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

export const setSearchSuggestionTimeout = (timeout) => ({
  type: SET_SEARCH_SUGGESTIONS_TIMEOUT,
  payload: {
    timeout,
  },
});

export const clearSearchSuggestionTimeout = () => ({
  type: CLEAR_SEARCH_SUGGESTIONS_TIMEOUT,
});
