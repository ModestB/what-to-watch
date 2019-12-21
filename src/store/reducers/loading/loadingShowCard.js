import {
  FILTER_SINGLE_PAGE,
  GET_EXTRA_SHOW_INFO 
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    };
    case GET_EXTRA_SHOW_INFO: {
      return false;
    };
    default:
      return state;
  };
};