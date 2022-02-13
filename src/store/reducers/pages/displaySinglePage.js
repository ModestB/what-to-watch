import {
  SET_SEARCH_RESULTS,
  SET_SHOW_BY_ID,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
  FILTER_SINGLE_PAGE,
  SHOW_PREVIOUS_RESULTS,
} from "../../actionTypes/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case SET_SHOW_BY_ID: {
      return true;
    }

    case SET_TRENDING_SHOWS: {
      return false;
    }

    case SET_SHOWS_BY_GENRE: {
      return false;
    }

    case FILTER_SINGLE_PAGE: {
      return true;
    }

    case SHOW_PREVIOUS_RESULTS: {
      return false;
    }

    default:
      return state;
  }
};
