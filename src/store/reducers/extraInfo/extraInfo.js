import {
  SHOW_PREVIOUS_RESULTS,
  SET_EXTRA_SHOW_INFO,
  SET_TRENDING_SHOWS,
} from "../../actionTypes/actionTypes";

const defaultState = {
  trailers: [],
  reviews: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRENDING_SHOWS:
    case SHOW_PREVIOUS_RESULTS: {
      return defaultState;
    }

    case SET_EXTRA_SHOW_INFO: {
      return {
        trailers: action.payload.trailers,
        reviews: action.payload.reviews,
      };
    }

    default:
      return state;
  }
};
