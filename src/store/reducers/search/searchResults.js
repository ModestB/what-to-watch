import {
  SET_SEARCH_RESULTS,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
} from "../../actionTypes/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.searchResults;
    }

    case SET_TRENDING_SHOWS: {
      return action.payload.searchResults;
    }

    case SET_SHOWS_BY_GENRE: {
      return action.payload.searchResults;
    }

    default:
      return state;
  }
};
