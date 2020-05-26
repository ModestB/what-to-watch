import {
  SET_SEARCH_SUGGESTIONS,
  GET_SEARCH_SUGGESTIONS,
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS_TIMEOUT,
  CLEAR_SEARCH_SUGGESTIONS_TIMEOUT,
} from "../../actionTypes/actionTypes";

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

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

export const setSearchSuggestions = (inputValue, results) => ({
  type: SET_SEARCH_SUGGESTIONS,
  payload: {
    inputValue,
    results,
  },
});

export function getSearchSuggestions(inputValue) {
  return function(dispatch) {
    dispatch(clearSearchSuggestionTimeout());
    dispatch({
      type: GET_SEARCH_SUGGESTIONS,
      payload: {
        inputValue,
      },
    });

    let keywordRequest = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`;
    let value = inputValue;

    dispatch(
      setSearchSuggestionTimeout(
        setTimeout(() => {
          if (value) {
            return fetch(keywordRequest)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                dispatch(setSearchSuggestions(value, data.results));
              });
          }
        }, 600)
      )
    );
  };
}
