import {
  INIT_FILTER_SINGLE_PAGE,
  FILTER_SINGLE_PAGE,
} from "../../actionTypes/actionTypes";

export const initFilterSinglePage = (
  element,
  displayedResults,
  singlePageType
) => ({
  type: INIT_FILTER_SINGLE_PAGE,
  payload: {
    element,
    displayedResults,
    singlePageType,
  },
});

export const filterSinglePage = (itemId, displayedResults, singlePageType) => ({
  type: FILTER_SINGLE_PAGE,
  payload: {
    itemId,
    displayedResults,
    singlePageType,
  },
});
