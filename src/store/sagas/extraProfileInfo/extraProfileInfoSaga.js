import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

function* setExtraProfileInfo(profileDetails, profileCredits) {
  yield put(actions.setExtraProfileInfo(profileDetails, profileCredits));
}

export function* getExtraProfileInfoSaga(action) {
  let detailsRequest = `https://api.themoviedb.org/3/person/${action.payload.profileId}?api_key=${API_KEY}&language=en-US`;
  let combinedCreditsRequest = `
  https://api.themoviedb.org/3/person/${action.payload.profileId}/combined_credits?api_key=${API_KEY}&language=en-US`;
  let profileDetails,
    profileCredits = null;

  const promiseDetails = new Promise((resolve, reject) => {
    fetch(detailsRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });
  const promiseCredits = new Promise((resolve, reject) => {
    fetch(combinedCreditsRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.cast);
      });
  });

  profileDetails = yield promiseDetails;
  profileCredits = yield promiseCredits;

  yield setExtraProfileInfo(profileDetails, profileCredits);
}
