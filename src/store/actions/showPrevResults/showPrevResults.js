import { SHOW_PREVIOUS_RESULTS } from "../../actionTypes/actionTypes";

export const showPreviousResults = (prevResults) => ({
  type: SHOW_PREVIOUS_RESULTS,
  payload: {
    prevResults,
  },
});
