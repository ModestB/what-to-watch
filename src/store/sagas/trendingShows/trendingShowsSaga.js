import { put } from "redux-saga/effects";
import axios from "../../../axios";
import * as actions from "../../actions/actions";

import { API_KEY } from "../../../constants";

export function* getTrendingShowsSaga() {
  const resultPromise = new Promise((resolve) => {
    axios.get(`trending/all/week?api_key=${API_KEY}`).then(({ data }) => {
      resolve(data.results);
    });
  });

  const results = yield resultPromise;

  yield put(actions.setTrendingShows(results));
}
