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

  it("should create action to DELETE_SEARCH_SUGGESTIONS_INPUT", () => {
    const expectedOutput = [{ type: DELETE_SEARCH_SUGGESTIONS_INPUT }];

    store.dispatch(deleteSearchSuggestionsInput());
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to SET_SEARCH_SUGGESTIONS_TIMEOUT", () => {
    const payload = { timeout: 10 };
    const expectedOutput = [{ type: SET_SEARCH_SUGGESTIONS_TIMEOUT, payload }];

    store.dispatch(setSearchSuggestionTimeout(payload.timeout));
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to CLEAR_SEARCH_SUGGESTIONS_TIMEOUT", () => {
    const expectedOutput = [{ type: CLEAR_SEARCH_SUGGESTIONS_TIMEOUT }];

    store.dispatch(clearSearchSuggestionTimeout());
    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
