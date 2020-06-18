import {
  deleteSearchSuggestionsInput,
  focusOutSearchSuggestions,
  setSearchSuggestionTimeout,
  clearSearchSuggestionTimeout,
} from "./searchSuggestionsActions";
import {
  FOCUS_OUT_SEARCH_SUGEGSTIONS,
  DELETE_SEARCH_SUGGESTIONS_INPUT,
  SET_SEARCH_SUGGESTIONS_TIMEOUT,
  CLEAR_SEARCH_SUGGESTIONS_TIMEOUT,
} from "../../actionTypes/actionTypes";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("searchSuggestionsActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create action to FOCUS_OUT_SEARCH_SUGEGSTIONS", () => {
    const expectedOutput = [{ type: FOCUS_OUT_SEARCH_SUGEGSTIONS }];

    store.dispatch(focusOutSearchSuggestions());
    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
