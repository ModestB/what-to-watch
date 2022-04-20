import { put } from "redux-saga/effects";

import * as actions from "../../actions/actions";

export function* initFilterSinglePageSaga(action) {
  let mediaType = action.payload.element.media_type
    ? action.payload.element.media_type
    : action.payload.singlePageType;

  yield put(
    actions.filterSinglePage(
      action.payload.element.id,
      action.payload.displayedResults,
      action.payload.singlePageType
    )
  );

  yield put(actions.getExtraShowInfo(action.payload.element.id, mediaType));
}
