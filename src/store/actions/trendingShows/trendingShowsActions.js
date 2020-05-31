import {
  SET_TRENDING_SHOWS,
  GET_TRENDING_SHOWS,
} from "../../actionTypes/actionTypes";

export const setTrendingShows = (searchResults) => ({
  type: SET_TRENDING_SHOWS,
  payload: {
    searchResults,
  },
});

export const getTrendingShows = () => ({
  type: GET_TRENDING_SHOWS,
});
