import { 
  SET_SEARCH_RESULTS,
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS
} from '../../actionTypes/actionTypes';


export default (state = false, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return false
    }

    case FOCUS_OUT_SEARCH_SUGEGSTIONS: {
      return false
    }

    case DELETE_SEARCH_SUGGESTIONS_INPUT: {
      return false
    }

    case SET_SEARCH_SUGGESTIONS: {
      return true
    }

    default:
      return state;
  }
}

