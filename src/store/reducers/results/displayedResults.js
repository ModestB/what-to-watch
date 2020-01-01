import { 
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
  SET_TRENDING_SHOWS,
  SHOW_PREVIOUS_RESULTS 
} from '../../actionTypes/actionTypes';

function filterElementToDisplay (state, itemId) {
  return state.filter( ( item ) => {
    return item.id === itemId
  })
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.searchResults;
    }

    case FIND_SHOW_BY_ID: {
      return action.payload.searchResults;
    }
    
    case FILTER_SINGLE_PAGE: {
      return filterElementToDisplay(state, action.payload.itemId)
    }

    case SET_TRENDING_SHOWS: {
      return action.payload.searchResults;
    }

    case SHOW_PREVIOUS_RESULTS: {
      return action.payload.prevResults;
    }

    default:
      return state;
  }
}

