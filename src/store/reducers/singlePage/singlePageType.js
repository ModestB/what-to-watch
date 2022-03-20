import {
  SET_SHOW_BY_ID,
  FILTER_SINGLE_PAGE,
} from "../../actionTypes/actionTypes";

function filterElementToDisplay(displayedResults, itemId) {
  return displayedResults.current.filter((item) => {
    return item.id === itemId;
  });
}

export default (state = null, action) => {
  switch (action.type) {
    case SET_SHOW_BY_ID: {
      return action.payload.mediaType;
    }

    case FILTER_SINGLE_PAGE: {
      let mediaType = filterElementToDisplay(
        action.payload.displayedResults,
        action.payload.itemId
      )[0].media_type;

      return mediaType ? mediaType : action.payload.singlePageType;
    }

    default:
      return state;
  }
};
