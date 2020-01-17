/* global chrome */
import {
  FILTER_SINGLE_PAGE,
  SHOW_PREVIOUS_RESULTS,
} from '../actionTypes/actionTypes';

import { getExtraShowInfo } from './api/extraShowInfoActions';
import { getExtraProfileInfo } from './api/extraProfileInfoActions';

export * from './api/extraShowInfoActions';
export * from './api/extraProfileInfoActions';
export * from './api/trendingShowsActions';
export * from './api/showByIdActions';
export * from './api/seachSuggestionsActions';
export * from './api/searchResultsActions';
export * from './bookmark/bookmarkActions';
export * from './searchSuggestions/searchSuggestionsActions';

export function filterSinglePage (element, displayedResults) {
  return function(dispatch){
    dispatch({
      type:  FILTER_SINGLE_PAGE,
      payload: {
        itemId: element.id,
        displayedResults
      }
    });
    if(element.media_type === "person") {
      dispatch(getExtraProfileInfo(element.id))
    } else {
      dispatch(getExtraShowInfo(element.id, element.media_type))
    }
  }
}

export const showPreviousResults = (prevResults) => ({
  type:  SHOW_PREVIOUS_RESULTS,
  payload: {
    prevResults
  }
});