import { SET_ROUTE } from "../../actionTypes/actionTypes";

const defaultState = {
  route: "trending",
  title: "Trending",
  previous: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ROUTE: {
      let next = action.payload;
      let previous = {
        route: state.route,
        title: state.title,
      };

      if (action.payload.route === "back") {
        previous = {};
        next = state.previous;
      }

      return {
        ...next,
        previous,
      };
    }

    default:
      return state;
  }
};
