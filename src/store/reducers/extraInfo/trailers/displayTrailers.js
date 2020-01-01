import { 
  SET_SEARCH_RESULTS, 
  SHOW_PREVIOUS_RESULTS,
  SET_EXTRA_SHOW_INFO,
  FIND_TRENDING_SHOWS,
} from '../../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case FIND_TRENDING_SHOWS: {
      return false;
    }

    case SHOW_PREVIOUS_RESULTS: {
      return false;
    }

    case SET_EXTRA_SHOW_INFO: {
      return true;
    }

    default:
      return state;
  }
}

