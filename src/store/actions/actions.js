import {
  SET_SEARCH_RESULTS,
  FIND_SHOW_BY_ID,
  FIND_TRENDING_SHOWS,
  FILTER_SINGLE_PAGE,
  SHOW_PREVIOUS_RESULTS
} from '../actionTypes/actionTypes';

export const setSearchResults = () => ({
  type:  SET_SEARCH_RESULTS
});

export const findShowById = () => ({
  type:  FIND_SHOW_BY_ID
});

export const findTrendingShows = () => ({
  type:  FIND_TRENDING_SHOWS
});

export const filterSinglePage = () => ({
  type:  FILTER_SINGLE_PAGE
});

export const showPreviousResults = () => ({
  type:  SHOW_PREVIOUS_RESULTS
});