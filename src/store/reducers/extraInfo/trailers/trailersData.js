import {
  SHOW_PREVIOUS_RESULTS,
  SET_EXTRA_SHOW_INFO,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
} from "../../../actionTypes/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_TRENDING_SHOWS: {
      return [];
    }

    case SET_SHOWS_BY_GENRE: {
      return [];
    }

    case SHOW_PREVIOUS_RESULTS: {
      return [];
    }

    case SET_EXTRA_SHOW_INFO: {
      return action.payload.trailersData;
    }

    default:
      return state;
  }
};
