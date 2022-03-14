import { SET_ROUTE } from "../../actionTypes/actionTypes";

const defaultState = {
  route: "trending",
  title: "Trending",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ROUTE: {
      return action.payload;
    }

    default:
      return state;
  }
};
