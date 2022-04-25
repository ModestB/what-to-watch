import { put } from "redux-saga/effects";
import axios from "../../../axios";
import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

function* setExtraShowInfo(reviews, trailers) {
  yield put(actions.setExtraShowInfo(reviews, trailers));
}

export function* getExtraShowInfoSaga(action) {
  const requestTrailers = `${action.payload.mediaType}/${action.payload.showId}/videos?api_key=${API_KEY}&language=en-US`;
  let requestReviews = `${action.payload.mediaType}/${action.payload.showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const trailersPromise = new Promise((resolve) => {
    axios.get(requestTrailers).then(({ data }) => {
      resolve(
        data.results.filter((element) => {
          return element.type === "Trailer" && element.site === "YouTube";
        })
      );
    });
  });

  const reviewsPromise = new Promise((resolve) => {
    axios.get(requestReviews).then(({ data }) => {
      resolve(data.results);
    });
  });

  const trailers = yield trailersPromise;
  const reviews = yield reviewsPromise;

  yield setExtraShowInfo(reviews, trailers);
}
