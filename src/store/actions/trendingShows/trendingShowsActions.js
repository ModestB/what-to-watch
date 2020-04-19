import { SET_TRENDING_SHOWS } from "../../actionTypes/actionTypes";

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setTrendingShows = (searchResults) => ({
  type: SET_TRENDING_SHOWS,
  payload: {
    searchResults,
  },
});

export function getTrendingShows() {
  return function(dispatch) {
    let request = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

    return fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setTrendingShows(data.results));
      });
  };
}
