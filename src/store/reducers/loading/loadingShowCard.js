import {
  FILTER_SINGLE_PAGE,
  SET_EXTRA_SHOW_INFO,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
  SET_SEARCH_RESULTS,
  SET_EXTRA_PROFILE_INFO,
} from "../../actionTypes/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    }

    case SET_SEARCH_RESULTS: {
      return false;
    }

    case SET_EXTRA_SHOW_INFO: {
      return false;
    }

    case SET_EXTRA_PROFILE_INFO: {
      return false;
    }

    case SET_TRENDING_SHOWS: {
      return false;
    }

    case SET_SHOWS_BY_GENRE: {
      return false;
    }

    default:
      return state;
  }
};
