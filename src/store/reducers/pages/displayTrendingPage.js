import {
  SET_SEARCH_RESULTS,
  FIND_TRENDING_SHOWS,
} from '../../actionTypes/actionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case FIND_TRENDING_SHOWS: {
      return true;
    }

    default:
      return state;
  }
}