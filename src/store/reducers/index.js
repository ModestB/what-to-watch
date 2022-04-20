import { combineReducers } from "redux";

import loading from "./loading/loading";

import search from "./search/search";

import displayedResults from "./results/displayedResults";

import singlePageType from "./singlePage/singlePageType";

import extraInfo from "./extraInfo/extraInfo";

import bookmarks from "./bookmarks/bookmarks";

import suggestions from "./suggestions/suggestions";

import routes from "./routes/routes";

export default combineReducers({
  loading,
  search,
  displayedResults,
  singlePageType,
  extraInfo,
  bookmarks,
  suggestions,
  routes,
});
