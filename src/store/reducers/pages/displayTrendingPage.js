import {
  SET_SEARCH_RESULTS,
  SET_TRENDING_SHOWS,
} from '../../actionTypes/actionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case SET_TRENDING_SHOWS: {
      return true;
    }

    default:
      return state;
  }
}