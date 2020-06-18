import {
  toggleBookmarks,
  setBookmarksStorage,
  addBookmark,
  removeBookmark,
  getBookmarksStorage,
} from "./bookmarkActions";
import {
  TOGGLE_BOOKMARKS,
  SET_BOOKMARKS_STORAGE,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  UPDATE_BOOKMARKS_STORAGE,
} from "../../actionTypes/actionTypes";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("bookmarkActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create action to TOGGLE_BOOKMARKS", () => {
    const expectedOutput = [{ type: TOGGLE_BOOKMARKS }];

    store.dispatch(toggleBookmarks());
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to SET_BOOKMARKS_STORAGE", () => {
    const bookmarks = [
      {
        id: 420809,
        title: "Maleficent: Mistress of Evil",
        date: "2019",
        mediaType: "movie",
      },
      {
        id: 69823,
        title: "After M*A*S*H",
        date: "1983",
        mediaType: "tv",
      },
      {
        id: 49434,
        title: "Making M*A*S*H",
        date: "Not specified",
        mediaType: "tv",
      },
      {
        id: 475557,
        title: "Joker",
        date: "2019",
        mediaType: "movie",
      },
      {
        id: 290859,
        title: "Terminator: Dark Fate",
        date: "2019",
        mediaType: "movie",
      },
      {
        id: 1001657,
        date: "Not specified",
      },
    ];
    const expectedOutput = [
      {
        type: SET_BOOKMARKS_STORAGE,
        payload: {
          bookmarks,
        },
      },
    ];

    store.dispatch(setBookmarksStorage(bookmarks));
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to ADD_BOOKMARK", () => {
    const bookmarkDetails = {
      id: 71446,
      title: "La casa de papel",
      date: "2017",
      mediaType: "tv",
    };
    const expectedOutput = [
      {
        type: ADD_BOOKMARK,
        payload: {
          bookmarkDetails,
        },
      },
    ];

    store.dispatch(addBookmark(bookmarkDetails));
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to REMOVE_BOOKMARK", () => {
    const bookmarkId = 420809;
    const expectedOutput = [
      {
        type: REMOVE_BOOKMARK,
        payload: {
          bookmarkId: 420809,
        },
      },
    ];

    store.dispatch(removeBookmark(bookmarkId));
    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
