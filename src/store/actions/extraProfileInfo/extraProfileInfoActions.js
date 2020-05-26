import {
  SET_EXTRA_PROFILE_INFO,
  GET_EXTRA_PROFILE_INFO,
} from "../../actionTypes/actionTypes";

export const setExtraProfileInfo = (profileDetails, profileCredits) => ({
  type: SET_EXTRA_PROFILE_INFO,
  payload: {
    profileDetails,
    profileCredits,
  },
});

export const getExtraProfileInfo = (profileId) => ({
  type: GET_EXTRA_PROFILE_INFO,
  payload: {
    profileId,
  },
});
