import {
  REQUEST_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
} from '../../actionTypes/actionTypes';

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