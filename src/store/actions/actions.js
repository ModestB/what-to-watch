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

export const setSearchResults = (inputValue) => ({
  type:  SET_SEARCH_RESULTS,
  payload: {
    inputValue
  }
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

export const filterSinglePageEnd = () => ({
  type:  FILTER_SINGLE_PAGE_END
});

export const showPreviousResults = () => ({
  type:  SHOW_PREVIOUS_RESULTS
});

export const getExtraShowInfo = () => ({
  type:  GET_EXTRA_SHOW_INFO
});

