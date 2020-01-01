import { 
  SHOW_PREVIOUS_RESULTS,
  SET_EXTRA_SHOW_INFO,
  FIND_TRENDING_SHOWS,
} from '../../../actionTypes/actionTypes';

export default (state = [], action) => {
  switch (action.type) {

    case FIND_TRENDING_SHOWS: {
      return [];
    }

    case SHOW_PREVIOUS_RESULTS: {
      return [];
    }

    case SET_EXTRA_SHOW_INFO: {
      return action.payload.reviewsData;
    }

    default:
      return state;
  }
}

