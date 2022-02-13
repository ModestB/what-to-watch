import { SET_EXTRA_PROFILE_INFO } from "../../../actionTypes/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_EXTRA_PROFILE_INFO: {
      return action.payload.profileDetails;
    }

    default:
      return state;
  }
};
