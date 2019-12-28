import { 
  SET_SEARCH_RESULTS,
  FIND_TRENDING_SHOWS 
} from '../../actionTypes/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.searchResults;
    }
    
    case FIND_TRENDING_SHOWS: {
      return action.payload.searchResults;
    }

    default:
      return state;
  }
}