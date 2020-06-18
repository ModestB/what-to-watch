import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

function* setExtraShowInfo(reviewsData, trailersData) {
  yield put(actions.setExtraShowInfo(reviewsData, trailersData));
}

export function* getExtraShowInfoSaga(action) {
  let requestTrailers = "";
  let requestReviews = "";
  let trailersData = null;
  let reviewsData = [];

  if (action.payload.mediaType === "movie") {
    requestTrailers = `https://api.themoviedb.org/3/movie/${action.payload.showId}/videos?api_key=${API_KEY}&language=en-US`;
    requestReviews = `https://api.themoviedb.org/3/movie/${action.payload.showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    requestTrailers = `https://api.themoviedb.org/3/tv/${action.payload.showId}/videos?api_key=${API_KEY}&language=en-US`;
    requestReviews = `https://api.themoviedb.org/3/tv/${action.payload.showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const trailersPromise = new Promise((resolve, reject) => {
    fetch(requestTrailers)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(
          data.results.filter((element) => {
            return element.type === "Trailer" && element.site === "YouTube";
          })
        );
      });
  });

  const reviewsPromise = new Promise((resolve, reject) => {
    fetch(requestReviews)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      });
  });

  trailersData = yield trailersPromise;
  reviewsData = yield reviewsPromise;

  yield setExtraShowInfo(reviewsData, trailersData);
}
