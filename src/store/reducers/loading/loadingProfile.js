import {
  FILTER_SINGLE_PAGE,
  SET_EXTRA_PROFILE_INFO,
  SET_SEARCH_RESULTS
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    };

    case SET_EXTRA_PROFILE_INFO: {
      return false;
    };

    case SET_SEARCH_RESULTS: {
      return false;
    };

    default:
      return state;
  };
};