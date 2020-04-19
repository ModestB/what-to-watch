import { FILTER_SINGLE_PAGE } from "../../actionTypes/actionTypes";

import { getExtraShowInfo } from "../extraShowInfo/extraShowInfoActions";
import { getExtraProfileInfo } from "../extraProfileInfo/extraProfileInfoActions";

export function filterSinglePage(element, displayedResults, singlePageType) {
  return function(dispatch) {
    let mediaType = element.media_type ? element.media_type : singlePageType;

    dispatch({
      type: FILTER_SINGLE_PAGE,
      payload: {
        itemId: element.id,
        displayedResults,
        singlePageType,
      },
    });

    if (mediaType === "person") {
      dispatch(getExtraProfileInfo(element.id));
    } else {
      dispatch(getExtraShowInfo(element.id, mediaType));
    }
  };
}
