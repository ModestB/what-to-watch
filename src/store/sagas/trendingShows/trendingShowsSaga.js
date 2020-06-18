import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

export function* getTrendingShowsSaga(action) {
  let request = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

  const resultPromise = new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      });
  });

  const results = yield resultPromise;

  yield put(actions.setTrendingShows(results));
}
