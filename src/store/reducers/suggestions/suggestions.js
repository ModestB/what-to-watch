import {
  SET_SEARCH_RESULTS,
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS,
} from "../../actionTypes/actionTypes";

const defaultState = {
  show: false,
  results: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
    case DELETE_SEARCH_SUGGESTIONS_INPUT: {
      return defaultState;
    }

    case FOCUS_OUT_SEARCH_SUGEGSTIONS: {
      return {
        ...state,
        show: false,
      };
    }

    case SET_SEARCH_SUGGESTIONS: {
      return {
        show: !!action.payload.results.length,
        results: action.payload.results,
      };
    }

    default:
      return state;
  }
};
