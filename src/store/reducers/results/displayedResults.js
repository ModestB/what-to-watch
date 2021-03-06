import { 
  SET_SEARCH_RESULTS,
  SET_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
  SET_TRENDING_SHOWS,
  SET_SHOWS_BY_GENRE,
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

    case SET_SHOW_BY_ID: {
      return action.payload.searchResults;
    }
    
    case FILTER_SINGLE_PAGE: {
      return filterElementToDisplay(state, action.payload.itemId)
    }

    case SET_TRENDING_SHOWS: {
      return action.payload.searchResults;
    }

    case SET_SHOWS_BY_GENRE: {
      return action.payload.searchResults;
    }

    case SHOW_PREVIOUS_RESULTS: {
      return action.payload.prevResults;
    }

    default:
      return state;
  }
}

