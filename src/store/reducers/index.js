import { combineReducers } from "redux";

import displaySinglePage from "./pages/displaySinglePage";
import displayFilteredPage from "./pages/displayFilteredPage";
import displayTrendingPage from "./pages/displayTrendingPage";

import loading from "./loading/loading";
import loadingProfile from "./loading/loadingProfile";
import loadingShowCard from "./loading/loadingShowCard";

import searchInputValue from "./search/searchInputValue";
import searchResults from "./search/searchResults";

import displayedResults from "./results/displayedResults";

import singlePageType from "./singlePage/singlePageType";

import displayReviews from "./extraInfo/reviews/displayReviews";
import displayTrailers from "./extraInfo/trailers/displayTrailers";

import reviewsData from "./extraInfo/reviews/reviewsData";
import trailersData from "./extraInfo/trailers/trailersData";
import profileDetails from "./extraInfo/profileDetails/profileDetails";
import profileCredits from "./extraInfo/profileCredits/profileCredits";

import bookmarks from "./bookmarks/bookmarks";
import displayBookmarks from "./bookmarks/displayBookmarks";

import showSuggestions from "./suggestions/showSuggestions";
import suggestionsResults from "./suggestions/suggestionsResults";

export default combineReducers({
  displaySinglePage,
  displayFilteredPage,
  displayTrendingPage,
  loading,
  loadingProfile,
  loadingShowCard,
  searchInputValue,
  searchResults,
  displayedResults,
  singlePageType,
  displayReviews,
  displayTrailers,
  reviewsData,
  trailersData,
  profileDetails,
  profileCredits,
  bookmarks,
  displayBookmarks,
  showSuggestions,
  suggestionsResults,
});
