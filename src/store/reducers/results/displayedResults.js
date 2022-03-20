import {
  SET_SEARCH_RESULTS,
  SET_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
  SHOW_PREVIOUS_RESULTS,
  SET_ROUTE,
} from "../../actionTypes/actionTypes";

const defaultState = {
  current: [],
  previous: [],
};

function filterElementToDisplay(state, itemId) {
  return state.current.filter((item) => {
    return item.id === itemId;
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
    case SET_SHOW_BY_ID:
    case SET_TRENDING_SHOWS:
    case SET_SHOWS_BY_GENRE: {
      return {
        current: action.payload.searchResults,
        previous: state.current,
      };
    }

    case FILTER_SINGLE_PAGE: {
      return {
        current: filterElementToDisplay(state, action.payload.itemId),
        previous: state.current,
      };
    }

    case SHOW_PREVIOUS_RESULTS: {
      return {
        current: state.previous,
        previous: [],
      };
    }

    case SET_ROUTE: {
      if (action.payload.route === "back") {
        return {
          current: state.previous,
          previous: [],
        };
      }

      return state;
    }

    default:
      return state;
  }
};
