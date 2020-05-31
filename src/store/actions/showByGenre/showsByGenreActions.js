import {
  SET_SHOWS_BY_GENRE,
  GET_SHOWS_BY_GENRE,
} from "../../actionTypes/actionTypes";

export const setShowsByGenre = (searchResults) => ({
  type: SET_SHOWS_BY_GENRE,
  payload: {
    searchResults,
  },
});

export const getShowsByGenre = (genreIds, singlePageType) => ({
  type: GET_SHOWS_BY_GENRE,
  payload: {
    genreIds,
    singlePageType,
  },
});
