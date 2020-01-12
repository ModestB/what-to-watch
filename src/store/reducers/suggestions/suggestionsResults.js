import { 
  SET_SEARCH_RESULTS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS
} from '../../actionTypes/actionTypes';


export default (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return []
    }

    case DELETE_SEARCH_SUGGESTIONS_INPUT: {
      return []
    }

    case SET_SEARCH_SUGGESTIONS: {
      return action.payload.results
    }

    default:
      return state;
  }
}

