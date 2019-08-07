import React, { Component } from 'react';

// Bootsrap imports
import Container from 'react-bootstrap/Container';

// Style imports
import './App.scss';

// Container imports
import SearchForm from "../searchForm/SearchForm";

// Components imports
import SearchResults from "../../components/searchResults/SearchResults";
import IconTv from "../../icons/js/Tv";
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';

// APIE
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const MULTI_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=`;
const DEFAULT_QUERY = "avengers";

class App extends Component {
  constructor(props) {
    super(props);
    this.filterSinglePageHandler = this.filterSinglePageHandler.bind(this);
  }

  state = {
    searchInputValue :  "null",
    searchResult  : [],
    displayedResults: [],
    singlePageData : [],
    displaySinglePage : false,
    displayNewSinglePage : false,
    singlePageType : "",
    displayReviews : false,
    reviews : [],
    displayTrailers : false,
    trailers : [],
    detailedProfileLoading : false,
    displayDetailedProfile: false,
    singleProfileDetails: {},
    singleProfileCredits: [],
    loading : false
  }

  searchHandler = ( inputValue ) => {
    this.setState( () => {
      return {
        loading: true
      }    
    });

    fetch( MULTI_API +  inputValue )
      .then( (response) => {
        return response.json()
      })
      .then( ( data ) => {
        this.setState({
          searchInputValue :  inputValue,
          searchResult : data.results,
          displayedResults : data.results,
          displaySinglePage : false,
          displayReviews : false,
          displayTrailers : false,
          displayDetailedProfile: false,
          loading: false
        })
      })
  }

  filterSinglePageHandler = ( element ) => {
    let elementToDisplay = this.state.displayedResults.filter( ( item ) => {
      return item.id === element.id
    })
    this.setState( () => {
      return {
        singlePageData : elementToDisplay[0],
        displaySinglePage : true,
        displayedResults : elementToDisplay,
        singlePageType : elementToDisplay[0].media_type
      }    
    });

    this.displayTrailersHandler(element.id, element.media_type);
    this.displayReviewsHandler(element.id, element.media_type);
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

    this.setState( () => {
      return {
        displayedResults: elementToDisplay,
        detailedProfileLoading: true
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
        this.setState( () => {
          return {
            detailedProfileLoading: false,
            displayDetailedProfile: true,
            singleProfileDetails: details,
            singleProfileCredits: credits,
          }    
        });
      })
  }

  findShowByIdHandler = (showId, mediaType) => {
    this.setState( () => {
      return {
        loading: true
      }    
    });

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
        this.displayTrailersHandler(showId, mediaType);
        this.displayReviewsHandler(showId, mediaType);
        this.setState( (  ) => {
          return {
            singlePageData : [data],
            displaySinglePage : true,
            displayNewSinglePage : true,
            displayedResults : [data],
            singlePageType: mediaType,
            loading: false
          }    
        });
      })

      
  };

  showPreviousResultsHandler = () => {
    this.setState( ( prevState ) => {
      return {
        displaySinglePage : false,
        displayNewSinglePage : false,
        displayedResults : [...prevState.searchResult],
        displayReviews : false,
        displayTrailers : false,
        displayDetailedProfile: false
      }    
    });
  };

  displayReviewsHandler = ( showId, mediaType ) => {
    let request = "";

    if( !this.state.displayReviews){
      this.setState( () => {
        return {
          loading: true
        }    
      });

      if( mediaType === 'movie'){
        request = ` https://api.themoviedb.org/3/movie/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
      } else {
        request = `
        https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      }
  
      return fetch( request )
        .then( (response) => {
          return response.json();
        })
        .then( ( data ) => {
          this.setState( () => {
            return {
              displayReviews : true,
              reviews: data.results,
              loading: false
            }    
          });
        })
    } else {
      this.setState( () => {
        return {
          displayReviews : false
        };
      })
    }
  };

  displayTrailersHandler = ( showId, mediaType ) => {
    let request = "";

    if( !this.state.displayTrailers){
      this.setState( () => {
        return {
          loading: true
        }    
      });

      if( mediaType === 'movie'){
        request = `https://api.themoviedb.org/3/movie/${showId}/videos?api_key=${API_KEY}&language=en-US`;
      } else {  
        request = `https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${API_KEY}&language=en-US`
      }
  
      return fetch( request )
        .then( (response) => {
          return response.json();
        })
        .then( ( data ) => {
          this.setState( () => {
            return {
              displayTrailers : true,
              trailers : data.results.filter( (element)  => {
                return element.type === 'Trailer' && element.site === "YouTube";
              }),
              loading: false
            }    
          });
        })
    } else {
      this.setState( () => {
        return {
          displayTrailers : false
        };
      })
    }
  }

  componentDidMount = () => {
    fetch( MULTI_API + DEFAULT_QUERY )
    .then( (response) => {
      return response.json()
    })
    .then( ( data ) => {
      this.setState({
        searchInputValue : DEFAULT_QUERY,
        searchResult : data.results,
        displayedResults : data.results
      })
    })  
  }

  render () {
    let searchResult = <p>No results</p>;
    if (this.state.searchResult.length > 0) {
      searchResult = 
        <SearchResults 
          displayedResults = {this.state.displayedResults} 
          filterSinglePage = {this.filterSinglePageHandler}
          filterProfileSinglePage = {this.filterProfileSinglePageHandler}
          findShowById = {this.findShowByIdHandler}
          displaySinglePage = {this.state.displaySinglePage} 
          singlePageType = {this.state.singlePageType}
          showPrevResults = {this.showPreviousResultsHandler}
          displayReviewsHandler  = {this.displayReviewsHandler}
          displayReviews = {this.state.displayReviews}
          reviews = {this.state.reviews}
          displayTrailersHandler = {this.displayTrailersHandler}
          displayTrailers = {this.state.displayTrailers}
          trailers = {this.state.trailers}
          loading = {this.state.loading}
          detailedProfileLoading = {this.state.detailedProfileLoading}
          displayDetailedProfile = {this.state.displayDetailedProfile}
          singleProfileDetails = {this.state.singleProfileDetails}
          singleProfileCredits = {this.state.singleProfileCredits}
          displayNewSinglePage = {this.state.displayNewSinglePage}
        />
    }
    return (
      <div className="App">
        <Container className="pt-3">
          <div className="d-flex justify-content-center align-items-center">
            <IconTv fill="#9E56FC" height="40px" width="40px"/>
            <h1 className="text-left mb-0 mt-2 ml-2"><b>Show</b> Lover</h1>
          </div>  
          <SearchForm searchHandler = {this.searchHandler}/>
          { /*BUG: test if && !this.state.displaySinglePage does anything */}
          { (this.state.loading && !this.state.displaySinglePage) ? <LoadingSpinner/> : searchResult}      
        </Container>
      </div>
    );
  }
}

export default App;
