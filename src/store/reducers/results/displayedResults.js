import {
  SET_SEARCH_RESULTS,
  SET_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
  SET_TRENDING_SHOWS,
  SHOW_PREVIOUS_RESULTS,
  SET_ROUTE,
  RESET_DISPLAYED_RESULTS,
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

function filterOutPersonMedia(results) {
  return results.filter((result) => result.media_type !== "person");
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
    case SET_SHOW_BY_ID:
    case SET_TRENDING_SHOWS: {
      return {
        current: filterOutPersonMedia(action.payload.searchResults),
        previous: state.current,
      };
    }

    case RESET_DISPLAYED_RESULTS: {
      return defaultState;
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
