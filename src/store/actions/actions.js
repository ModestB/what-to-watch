import {
  START_SEARCH,
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FIND_TRENDING_SHOWS,
  FILTER_SINGLE_PAGE,
  FILTER_SINGLE_PAGE_END,
  SHOW_PREVIOUS_RESULTS,
  GET_EXTRA_SHOW_INFO
} from '../actionTypes/actionTypes';

export const startSearchResults = () => ({
  type:  START_SEARCH
});

export const setSearchResults = (inputValue, searchResults) => ({
  type:  SET_SEARCH_RESULTS,
  payload: {
    inputValue,
    searchResults
  }
});

export const findShowById = (searchResults, mediaType) => ({
  type:  FIND_SHOW_BY_ID,
  payload: {
    searchResults,
    mediaType
  }
});

export const findTrendingShows = (searchResults) => ({
  type:  FIND_TRENDING_SHOWS,
  payload: {
    searchResults
  }
});

export const filterSinglePage = (itemId, displayedResults) => ({
  type:  FILTER_SINGLE_PAGE,
  payload: {
    itemId,
    displayedResults
  }
});

export const filterSinglePageEnd = () => ({
  type:  FILTER_SINGLE_PAGE_END
});

export const showPreviousResults = (prevResults) => ({
  type:  SHOW_PREVIOUS_RESULTS,
  payload: {
    prevResults
  }
});

export const getExtraShowInfo = (reviewsData, trailersData) => ({
  type:  GET_EXTRA_SHOW_INFO,
  payload: {
    reviewsData,
    trailersData
  }
});
