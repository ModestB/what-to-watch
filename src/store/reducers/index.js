import  { combineReducers } from 'redux';

import displaySinglePage from './pages/displaySinglePage';
import displayFilteredPage from './pages/displayFilteredPage';
import displayTrendingPage from './pages/displayTrendingPage';

import loading from './loading/loading';
import loadingProfile from './loading/loadingProfile';
import loadingShowCard from './loading/loadingShowCard';

import searchInputValue from './search/searchInputValue';
import searchResults from './search/searchResults';

import displayedResults from './results/displayedResults';

export default combineReducers({
  displaySinglePage,
  displayFilteredPage,
  displayTrendingPage,
  loading,
  loadingProfile,
  loadingShowCard,
  searchInputValue,
  searchResults,
  displayedResults
})