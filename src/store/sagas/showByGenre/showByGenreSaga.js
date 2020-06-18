import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

export function* getShowByGenreSaga(action) {
  let request = null;

  if (action.payload.singlePageType === "movie") {
    request = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${action.payload.genreIds.join(
      "%2C%20"
    )}`;
  } else {
    request = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${action.payload.genreIds.join(
      "%2C%20"
    )}&include_null_first_air_dates=false`;
  }

  const resultsPromise = new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      });
  });

  const results = yield resultsPromise;

  yield put(actions.setShowsByGenre(results));
}
