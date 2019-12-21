import {
  FILTER_SINGLE_PAGE,
  FILTER_SINGLE_PAGE_END,
} from '../../actionTypes/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE: {
      return true;
    };
    case FILTER_SINGLE_PAGE_END: {
      return false;
    };
    default:
      return state;
  };
};