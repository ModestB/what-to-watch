import {
  FILTER_SINGLE_PAGE,
  FILTER_SINGLE_PAGE_END,
  SET_SEARCH_RESULTS
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    };

    case FILTER_SINGLE_PAGE_END: {
      return false;
    };

    case SET_SEARCH_RESULTS: {
      return false;
    };

    default:
      return state;
  };
};