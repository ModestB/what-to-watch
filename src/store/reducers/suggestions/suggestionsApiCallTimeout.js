import { 
  SET_SEARCH_SUGGESTIONS_TIMEOUT,
  CLEAR_SEARCH_SUGGESTIONS_TIMEOUT
} from '../../actionTypes/actionTypes';


export default (state = null, action) => {
  switch (action.type) {
    case SET_SEARCH_SUGGESTIONS_TIMEOUT: {
      return action.payload.timeout
    }

    case CLEAR_SEARCH_SUGGESTIONS_TIMEOUT: {
      window.clearTimeout(state);
      return null;
    }

    default:
      return state;
  }
}

