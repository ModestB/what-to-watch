import { SET_SEARCH_RESULTS } from '../../actionTypes/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.inputValue;
    }

    default:
      return state;
  }
}