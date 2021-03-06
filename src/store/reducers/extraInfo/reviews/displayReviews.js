import { 
  SET_SEARCH_RESULTS, 
  SHOW_PREVIOUS_RESULTS,
  SET_EXTRA_SHOW_INFO,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE
} from '../../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false;
    }

    case SET_TRENDING_SHOWS: {
      return false;
    }

    case SET_SHOWS_BY_GENRE: {
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

