import {
  START_SEARCH,
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FIND_TRENDING_SHOWS,
  SHOW_PREVIOUS_RESULTS
} from '../../actionTypes/actionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case START_SEARCH: {
      return true;
    };
    case SET_SEARCH_RESULTS: {
      return false;
    };
    case FIND_SHOW_BY_ID: {
      return false;
    };
    case FIND_TRENDING_SHOWS: {
      return false;
    };
    case  SHOW_PREVIOUS_RESULTS: {
      return false;
    } ;
    default:
      return state;
  };
};