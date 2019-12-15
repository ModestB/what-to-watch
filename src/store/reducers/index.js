import  { combineReducers } from 'redux';

import displaySinglePage from './pages/displaySinglePage';
import displayFilteredPage from './pages/displayFilteredPage';
import displayTrendingPage from './pages/displayTrendingPage';

export default combineReducers({
  displaySinglePage,
  displayFilteredPage,
  displayTrendingPage
})