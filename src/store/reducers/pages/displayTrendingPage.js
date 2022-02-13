import {
  SET_SEARCH_RESULTS,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
} from "../../actionTypes/actionTypes";

export default (state = true, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case SET_TRENDING_SHOWS: {
      return true;
    }

    case SET_SHOWS_BY_GENRE: {
      return false;
    }

    default:
      return state;
  }
};
