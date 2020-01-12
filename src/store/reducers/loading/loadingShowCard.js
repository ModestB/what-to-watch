import {
  FILTER_SINGLE_PAGE,
  SET_EXTRA_SHOW_INFO,
  SET_TRENDING_SHOWS 
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    };
    case SET_EXTRA_SHOW_INFO: {
      return false;
    };
    case SET_TRENDING_SHOWS: {
      return false;
    };
    default:
      return state;
  };
};