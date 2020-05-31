import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export function* getShowByIdSaga(action) {
  let request = "";

  if (action.payload.mediaType === "movie") {
    request = `https://api.themoviedb.org/3/movie/${action.payload.showId}?api_key=${API_KEY}&language=en-US`;
  } else {
    request = `https://api.themoviedb.org/3/tv/${action.payload.showId}?api_key=${API_KEY}&language=en-US `;
  }

  const resultPromise = new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });

  const results = yield resultPromise;

  yield put(
    actions.getExtraShowInfo(action.payload.showId, action.payload.mediaType)
  );
  yield put(actions.setShowById([results], action.payload.mediaType));
}
