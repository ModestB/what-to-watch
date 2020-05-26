import {
  SET_EXTRA_SHOW_INFO,
  GET_EXTRA_SHOW_INFO,
} from "../../actionTypes/actionTypes";

export const setExtraShowInfo = (reviewsData, trailersData) => ({
  type: SET_EXTRA_SHOW_INFO,
  payload: {
    reviewsData,
    trailersData,
  },
});

export const getExtraShowInfo = (showId, mediaType) => ({
  type: GET_EXTRA_SHOW_INFO,
  payload: {
    showId,
    mediaType,
  },
});
