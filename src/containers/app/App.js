/* global chrome */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action Types
import * as actions from '../../store/actions/actions';

// Bootsrap imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Style imports
import './App.scss';

import {searchSuggestionSelectHandler} from '../../assets/js/all';

// Container imports
import SearchForm from "../searchForm/SearchForm";

// Components imports
import SearchResults from "../../components/searchResults/SearchResults";
import IconTv from "../../icons/js/Tv";
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import Bookmarks from '../../components/bookmarks/Bookmarks'

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const MULTI_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=`;


class App extends Component {
  componentDidMount(){
    searchSuggestionSelectHandler();
    this.props.getTrendingShows();
    this.props.getBookmarksStorage(); 
  }

  render () {
    let searchResult = null;
    let sectionTitle = null;

    if (this.props.searchInputValue !== null) {
      searchResult = 
        <div className="mt-3">
          <p>No results</p>
          <Button 
            className={`position-relative rounded-0 py-0 ml-2`}
            onClick={ this.props.getTrendingShows } 
            variant="primary" 
          >
            Show Trending
          </Button>
        </div>;
    }

    if (this.props.searchResults && this.props.searchResults.length > 0) {
      searchResult = 
        <SearchResults 
          displayedResults = {this.props.displayedResults}
          getTrendingShows = {this.props.getTrendingShows}
          displaySinglePage = {this.props.displaySinglePage} 
          singlePageType = {this.props.singlePageType}
          displayReviewsHandler  = {this.displayReviewsHandler}
          displayReviews = {this.props.displayReviews}
          reviews = {this.props.reviewsData}
          displayTrailers = {this.props.displayTrailers}
          trailers = {this.props.trailersData}
          loading = {this.props.loading}
          singleProfileDetails = {this.props.profileDetails}
          singleProfileCredits = {this.props.profileCredits}
          displayFilteredPage = {this.props.displayFilteredPage}
          loadingProfile = {this.props.loadingProfile}
          loadingShowCard = {this.props.loadingShowCard}
          addBookmark = {this.props.addBookmark}
          removeBookmark = {this.props.removeBookmark}
          bookmarks ={this.props.bookmarks}
        />
    }

    if (!this.props.displaySinglePage) {
      sectionTitle =   
        <h2 className='sectionTitle'>
          <span>{this.props.displayTrendingPage ? 'Trending' : 'Results'}</span>
        </h2>
    }

    return (
      <div className='App customScroll'>
        <Container className="pt-3">
          <div className="d-flex justify-content-center align-items-center">
            <IconTv fill="#9E56FC" height="40px" width="40px"/>
            <h1 className="text-left mb-0 mt-2 ml-2"><b>What</b> To Watch</h1>
          </div>  
          <SearchForm searchHandler = {this.props.getSearchResults}/>
          { sectionTitle }
          { this.props.loading ? <LoadingSpinner/> : searchResult }      
          <Bookmarks
            displayBookmarks = {this.props.displayBookmarks}
            displayBookmarksHandler = {this.props.toggleBookmarks}
            bookmarks = {this.props.bookmarks}
            removeBookmark = {this.props.removeBookmark}
          />
        </Container>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    displaySinglePage: state.displaySinglePage,
    displayFilteredPage: state.displayFilteredPage,
    displayTrendingPage: state.displayTrendingPage,
    loading: state.loading,
    loadingProfile: state.loadingProfile,
    loadingShowCard: state.loadingShowCard,
    searchInputValue: state.searchInputValue,
    searchResults: state.searchResults,
    displayedResults: state.displayedResults,
    singlePageType: state.singlePageType,
    displayReviews: state.displayReviews,
    displayTrailers: state.displayTrailers,
    reviewsData: state.reviewsData,
    trailersData: state.trailersData,
    profileDetails: state.profileDetails,
    profileCredits: state.profileCredits,
    displayBookmarks: state.displayBookmarks,
    bookmarks: state.bookmarks
  }
}

const mapStateDispatch = dispatch => {
  return {
    getTrendingShows: () => dispatch(actions.getTrendingShows()),
    toggleBookmarks: () => dispatch(actions.toggleBookmarks()),
    addBookmark: (bookmarkDetails) => dispatch(actions.addBookmark(bookmarkDetails)),
    removeBookmark: (bookmarkId) => dispatch(actions.removeBookmark(bookmarkId)),
    getBookmarksStorage: () => dispatch(actions.getBookmarksStorage()),
    getSearchResults: (inputValue) => dispatch(actions.getSearchResults(inputValue))
  }
}

export default connect(mapStateProps, mapStateDispatch)(App);
