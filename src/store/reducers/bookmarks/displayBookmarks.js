import { TOGGLE_BOOKMARKS } from "../../actionTypes/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_BOOKMARKS: {
      return !state;
    }

    default:
      return state;
  }
};
