/* global chrome */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action Types
import {
  getTrendingShows,
  getBookmarksStorage,
  getSearchResults
} from '../../store/actions/actions';

// Bootsrap imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Style imports
import classes from './App.module.scss';

import {searchSuggestionSelectHandler} from '../../assets/js/all';

// Container imports
import SearchForm from "../searchForm/SearchForm";

// Components imports
import SearchResults from "../../components/searchResults/SearchResults";
import IconTv from "../../icons/js/Tv";
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import Bookmarks from '../../components/bookmarks/Bookmarks'

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
        <SearchResults />
    }

    if (!this.props.displaySinglePage) {
      sectionTitle =   
        <h2 className={`${classes.subtitle}`}>
          <span>{this.props.displayTrendingPage ? 'Trending' : 'Results'}</span>
        </h2>
    }

    return (
      <div className={`${classes.container} customScroll`}>
        <Container className="pt-3">
          <div className="d-flex justify-content-center align-items-center">
            <IconTv fill="#9E56FC" height="40px" width="40px"/>
            <h1 className="text-left mb-0 mt-2 ml-2"><b>What</b> To Watch</h1>
          </div>  
          <SearchForm />
          { sectionTitle }
          { this.props.loading ? <LoadingSpinner/> : searchResult }      
          <Bookmarks/>
        </Container>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    displaySinglePage: state.displaySinglePage,
    displayTrendingPage: state.displayTrendingPage,
    loading: state.loading,
    searchInputValue: state.searchInputValue,
    searchResults: state.searchResults,
  }
}

const mapStateDispatch = dispatch => {
  return {
    getTrendingShows: () => dispatch(getTrendingShows()),
    getBookmarksStorage: () => dispatch(getBookmarksStorage()),
    getSearchResults: (inputValue) => dispatch(getSearchResults(inputValue))
  }
}

export default connect(mapStateProps, mapStateDispatch)(App);