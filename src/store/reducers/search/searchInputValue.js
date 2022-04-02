import {
  SET_SEARCH_RESULTS,
  GET_SEARCH_SUGGESTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
} from "../../actionTypes/actionTypes";

export default (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.inputValue;
    }

    case GET_SEARCH_SUGGESTIONS: {
      return action.payload.inputValue;
    }

    case DELETE_SEARCH_SUGGESTIONS_INPUT: {
      return "";
    }

    default:
      return state;
  }
};
