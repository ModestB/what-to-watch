import {
  SET_SEARCH_RESULTS,
  GET_SEARCH_SUGGESTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
} from "../../actionTypes/actionTypes";

const defaultState = {
  inputValue: "",
  touched: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEARCH_SUGGESTIONS: {
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };
    }

    case DELETE_SEARCH_SUGGESTIONS_INPUT: {
      return {
        ...state,
        inputValue: "",
      };
    }

    case SET_SEARCH_RESULTS: {
      return {
        touched: true,
        inputValue: action.payload.inputValue,
      };
    }

    default:
      return state;
  }
};
