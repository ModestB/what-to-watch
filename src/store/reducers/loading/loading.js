import {
  GET_SHOW_BY_ID,
  REQUEST_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
  SET_SHOW_BY_ID,
  SET_TRENDING_SHOWS,
  SHOW_PREVIOUS_RESULTS,
  FILTER_SINGLE_PAGE,
  SET_EXTRA_SHOW_INFO,
} from "../../actionTypes/actionTypes";

export default (state = true, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
    case FILTER_SINGLE_PAGE:
    case GET_SHOW_BY_ID: {
      return true;
    }

    case SET_EXTRA_SHOW_INFO:
    case SET_SEARCH_RESULTS:
    case SET_SHOW_BY_ID:
    case SET_TRENDING_SHOWS:
    case SHOW_PREVIOUS_RESULTS: {
      return false;
    }

    default:
      return state;
  }
};
