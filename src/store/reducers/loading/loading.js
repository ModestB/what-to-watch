import {
  REQUEST_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  SET_TRENDING_SHOWS,
  SHOW_PREVIOUS_RESULTS
} from '../../actionTypes/actionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS: {
      return true;
    };
    case SET_SEARCH_RESULTS: {
      return false;
    };
    case FIND_SHOW_BY_ID: {
      return false;
    };
    case SET_TRENDING_SHOWS: {
      return false;
    };
    case  SHOW_PREVIOUS_RESULTS: {
      return false;
    } ;
    default:
      return state;
  };
};