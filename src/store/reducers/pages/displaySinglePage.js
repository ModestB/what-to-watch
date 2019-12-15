import {
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FIND_TRENDING_SHOWS,
  FILTER_SINGLE_PAGE,
  SHOW_PREVIOUS_RESULTS
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }
    case FIND_SHOW_BY_ID: {
      return true;
    }
    case FIND_TRENDING_SHOWS: {
      return false;
    }
    case  FILTER_SINGLE_PAGE: {
      return true;
    }
    case  SHOW_PREVIOUS_RESULTS: {
      return false;
    } 
    default:
      return state;
  }
}