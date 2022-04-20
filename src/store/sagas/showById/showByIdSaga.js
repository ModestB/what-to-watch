import { put } from "redux-saga/effects";
import axios from "../../../axios";
import { showByIdApiUrl } from "../../../constants";

import * as actions from "../../actions/actions";

export function* getShowByIdSaga(action) {
  const resultPromise = new Promise((resolve, reject) => {
    axios
      .get(showByIdApiUrl(action.payload.showId, action.payload.mediaType))
      .then((response) => {
        resolve(response.data);
      });
  });

  const results = yield resultPromise;

  yield put(
    actions.getExtraShowInfo(action.payload.showId, action.payload.mediaType)
  );
  yield put(actions.setShowById([results], action.payload.mediaType));
}
