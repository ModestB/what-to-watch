import {
  SET_SEARCH_RESULTS,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
} from "../../actionTypes/actionTypes";

const defaultState = {
  current: [],
  previous: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
    case SET_TRENDING_SHOWS:
    case SET_SHOWS_BY_GENRE: {
      return {
        current: action.payload.searchResults,
        next: state.previous,
      };
    }

    default:
      return state;
  }
};
