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

// LOCAL STORAGE
const LS_BOOKMARKS = 'wtwBookmarks';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterSinglePageHandler = this.filterSinglePageHandler.bind(this);
  }

  state = {
    displayedResults: [],
    singlePageData : [],
    singlePageType : "",
    displayReviews : false,
    reviews : [],
    displayTrailers : false,
    trailers : [],
    singleProfileDetails: {},
    singleProfileCredits: [],
    displayBookmarks : false, 
    bookmarks: []
  };

  componentDidUpdate (prevProps, prevState) {
    if (prevState.bookmarks && JSON.stringify(prevState.bookmarks) !== JSON.stringify(this.state.bookmarks)) {
      this.updateLocalSorageBookmarks(this.state.bookmarks);
    };
  };

  searchHandler = ( inputValue ) => {
    this.props.startSearch();

    fetch( MULTI_API +  inputValue )
      .then( (response) => {
        return response.json()
      })
      .then( ( data ) => {
        this.props.setSearchResults(inputValue, data.results);
        this.setState({
          displayedResults : data.results,
          displayReviews : false,
          displayTrailers : false,
        })
      })
  }

  filterSinglePageHandler = ( element, mediaType ) => {
    console.log('filter')
    let elementToDisplay = this.state.displayedResults.filter( ( item ) => {
      return item.id === element.id
    })

    this.props.filterSinglePage();
    this.setState( () => {
      return {
        singlePageData : elementToDisplay[0],
        displayedResults : elementToDisplay,
        singlePageType : elementToDisplay[0].media_type,
      }    
    });

    this.getAdditionalShowInfoHandler(element.id, (element.media_type ? element.media_type : mediaType));
  };

  filterProfileSinglePageHandler = ( profileId ) => {
    let detailsRequest = `https://api.themoviedb.org/3/person/${profileId}?api_key=${API_KEY}&language=en-US`;
    let combinedCreditsRequest = `
    https://api.themoviedb.org/3/person/${profileId}/combined_credits?api_key=${API_KEY}&language=en-US`
    let details = null;
    let credits = null;
    let elementToDisplay = this.state.displayedResults.filter( ( item ) => {
      return item.id === profileId
    })

    this.props.filterSinglePage()
    this.setState( () => {
      return {
        displayedResults: elementToDisplay,
      }    
    });
    
    return fetch( detailsRequest )
      .then( (response) => {
        return response.json();
      })
      .then( ( data ) => {
        // SECOND FETCH
        details = data;
        return  fetch( combinedCreditsRequest );
      })
      .then( (response) => {
        return response.json()
      })
      .then( ( data ) => {
        credits = data.cast;
        this.props.filterSinglePageEnd()
        this.setState( () => {
          return {
            singleProfileDetails: details,
            singleProfileCredits: credits,
          }    
        });
      })
  }

  findShowByIdHandler = (showId, mediaType) => {
    this.props.startSearch();

    let request = "";

    if( mediaType === 'movie'){
      request = `https://api.themoviedb.org/3/movie/${showId}?api_key=${API_KEY}&language=en-US`;
    } else {
      request = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US `
    }

    return fetch( request )
      .then( (response) => {
        return response.json();
      })
      .then( ( data ) => {
        this.getAdditionalShowInfoHandler(showId, mediaType);
        this.props.findShowById();
        this.setState( (  ) => {
          return {
            singlePageData : [data],
            displayedResults : [data],
            singlePageType: mediaType,
          }    
        });
      })
  };

  findTrendingShows = () => {
    let request =  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`

    return fetch(request)
      .then( (response) => {
        return response.json();
      })
      .then( ( data ) => {
        this.props.findTrendingShows(data.results)

        this.setState( () => {
          return {
            displayedResults : data.results,
            displayReviews : false,
            reviews : [],
            trailers : [],
            displayTrailers : false,
          }    
        });
      })
  }

  showPreviousResultsHandler = () => {
    this.props.showPreviousResults()
    this.setState( ( prevState ) => {
      return {
        displayedResults : [...this.props.searchResults],
        displayReviews : false,
        reviews : [],
        trailers : [],
        displayTrailers : false,
      }    
    });
  };

  getAdditionalShowInfoHandler = ( showId, mediaType ) => {
    let requestTrailers = "";
    let requestReviews = "";
    let trailersData = null;
    let reviewsData = null;

    if(!this.state.displayTrailers && !this.state.displayReviews){
      if( mediaType === 'movie'){
        requestTrailers = `https://api.themoviedb.org/3/movie/${showId}/videos?api_key=${API_KEY}&language=en-US`;
        requestReviews = `https://api.themoviedb.org/3/movie/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
      } else {  
        requestTrailers = `https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${API_KEY}&language=en-US`
        requestReviews = `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      }
  
      return fetch( requestTrailers )
        .then( (response) => {
          return response.json();
        })
        .then( ( data ) => {
          trailersData  = data.results.filter( (element)  => {
            return element.type === 'Trailer' && element.site === "YouTube";
          })

          return fetch( requestReviews );
        })
        .then( (response) => {
          return response.json()
        })
        .then( (data)  => {
          reviewsData = data;
          this.props.getExtraShowInfo();
          this.setState( () => {
            return {
              displayTrailers: true,
              displayReviews: true,
              trailers: trailersData,
              reviews: reviewsData.results,
            }
          })
         })
        ;
    } else {
      this.setState( () => {
        return {
          displayTrailers : false
        };
      })
    }
  }

  displayBookmarksHandler = () => {
    this.setState((state) => {
      return {
        displayBookmarks: !state.displayBookmarks
      };
    });
  };

  addBookmark = (id, title, date, mediaType) => {
    this.setState((state) => {
      let bookmarks;
      if (!state.bookmarks) {
        bookmarks = [{id, title, date, mediaType}];
      } else {
        bookmarks = [
          ...state.bookmarks,
          {id, title, date, mediaType}
        ];
      }
      return {
        bookmarks: bookmarks
      }
    });
  };

  removeBookmark = (id) => {
    let newBookmarks = 
      this.state.bookmarks.filter((bookmark) => {
        if (bookmark.id === id) {
          return false;
        }
        return true;
      });

    this.setState(() => {
      return {
        bookmarks: [
          ...newBookmarks,
        ]
      }
    });
  };

  loadStoredBookmarks = () => {
    if (process.env.NODE_ENV !== 'production') {
      this.setState( () => {
        return {
          bookmarks : JSON.parse(localStorage.getItem(LS_BOOKMARKS))
        }
      })
      return;
    };
    chrome.storage.sync.get(['LS_BOOKMARKS'], (result) => {
      this.setState( () => {
        return {
          bookmarks :  result.LS_BOOKMARKS
        };
      });
    });
  };

  updateLocalSorageBookmarks = (bookmarks) => {
    if (process.env.NODE_ENV !== 'production') {
      localStorage.setItem(LS_BOOKMARKS, JSON.stringify(bookmarks));
      return;
    };
    chrome.storage.sync.set({LS_BOOKMARKS: bookmarks});
  };

  componentDidMount(){
    searchSuggestionSelectHandler();
    this.findTrendingShows();
    this.loadStoredBookmarks(); 
  }

  render () {
    let searchResult = null;
    let sectionTitle = null;

    if (this.state.searchInputValue !== null) {
      searchResult = 
        <div className="mt-3">
          <p>No results</p>
          <Button 
            className={`position-relative rounded-0 py-0 ml-2`}
            onClick={ this.findTrendingShows } 
            variant="primary" 
          >
            Show Trending
          </Button>
        </div>;
    }

    if (this.props.searchResults && this.props.searchResults.length > 0) {
      searchResult = 
        <SearchResults 
          displayedResults = {this.state.displayedResults} 
          filterSinglePage = {this.filterSinglePageHandler}
          filterProfileSinglePage = {this.filterProfileSinglePageHandler}
          findShowById = {this.findShowByIdHandler}
          findTrendingShows = {this.findTrendingShows}
          displaySinglePage = {this.props.displaySinglePage} 
          singlePageType = {this.state.singlePageType}
          showPrevResults = {this.showPreviousResultsHandler}
          displayReviewsHandler  = {this.displayReviewsHandler}
          displayReviews = {this.state.displayReviews}
          reviews = {this.state.reviews}
          getAdditionalShowInfoHandler = {this.getAdditionalShowInfoHandler}
          displayTrailers = {this.state.displayTrailers}
          trailers = {this.state.trailers}
          loading = {this.props.loading}
          singleProfileDetails = {this.state.singleProfileDetails}
          singleProfileCredits = {this.state.singleProfileCredits}
          displayFilteredPage = {this.props.displayFilteredPage}
          loadingProfile = {this.props.loadingProfile}
          loadingShowCard = {this.props.loadingShowCard}
          addBookmark = {this.addBookmark}
          removeBookmark = {this.removeBookmark}
          bookmarks ={this.state.bookmarks}
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
          <SearchForm searchHandler = {this.searchHandler}/>
          { sectionTitle }
          { this.props.loading ? <LoadingSpinner/> : searchResult }      
          <Bookmarks
            displayBookmarks = {this.state.displayBookmarks}
            displayBookmarksHandler = {this.displayBookmarksHandler}
            bookmarks = {this.state.bookmarks}
            removeBookmark = {this.removeBookmark}
            findShowById = {this.findShowByIdHandler}
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
    searchResults: state.searchResults
  }
}

const mapStateDispatch = dispatch => {
  return {
    startSearch: () => dispatch(actions.startSearchResults()),
    setSearchResults: (inputValue, searchResults) => dispatch(actions.setSearchResults(inputValue, searchResults)),
    findShowById: () => dispatch(actions.findShowById()),
    findTrendingShows: (searchResults) => dispatch(actions.findTrendingShows(searchResults)),
    filterSinglePage: () => dispatch(actions.filterSinglePage()),
    filterSinglePageEnd: () => dispatch(actions.filterSinglePageEnd()),
    showPreviousResults: () => dispatch(actions.showPreviousResults()),
    getExtraShowInfo: () => dispatch(actions.getExtraShowInfo())

  }
}

export default connect(mapStateProps, mapStateDispatch)(App);
