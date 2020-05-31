import { SET_SHOW_BY_ID, GET_SHOW_BY_ID } from "../../actionTypes/actionTypes";

export const setShowById = (searchResults, mediaType) => ({
  type: SET_SHOW_BY_ID,
  payload: {
    searchResults,
    mediaType,
  },
});

export const getShowById = (showId, mediaType) => ({
  type: GET_SHOW_BY_ID,
  payload: {
    showId,
    mediaType,
  },
});
