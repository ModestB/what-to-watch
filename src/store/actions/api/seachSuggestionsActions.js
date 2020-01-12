import {
  SET_SEARCH_SUGGESTIONS,
  GET_SEARCH_SUGGESTIONS,
} from '../../actionTypes/actionTypes';

import { 
  setSearchSuggestionTimeout, 
  clearSearchSuggestionTimeout 
} from '../actions';

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setSearchSuggestions = (inputValue, results) => ({
  type:  SET_SEARCH_SUGGESTIONS,
  payload: {
    inputValue,
    results
  }
});

export function getSearchSuggestions(inputValue){
  return function(dispatch) {
    dispatch(clearSearchSuggestionTimeout())
    dispatch({
      type:  GET_SEARCH_SUGGESTIONS,
      payload: {
        inputValue
      }
    })

    let keywordRequest = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`;
    let value = inputValue;

    dispatch(setSearchSuggestionTimeout(
      setTimeout(() => {
        if (value) {
          return fetch(keywordRequest)
          .then((response) => {  
            return response.json();
          })
          .then((data) => {
            dispatch(setSearchSuggestions(value, data.results))
          })
        }
      }, 600)
    ))
  }
}