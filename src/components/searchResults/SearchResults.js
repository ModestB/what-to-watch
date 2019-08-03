import React, { Component } from "react";

// Components imports
import ShowCard from "./showCard/ShowCard";
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import ProfileCard from "./profileCard/ProfileCard";
import Button from 'react-bootstrap/Button';

// Style imports
import classes from "./SearchResults.module.scss";

class SearchResults extends Component {
  render () {
    let resultToDisplay = null;
    let goBackBtn = null;

    resultToDisplay = this.props.displayedResults.map(element => {
      let card = null;
      switch (element.media_type) {
        case "movie":
          card =
            <ShowCard 
              key = {element.id} 
              title = {element.title}
              overview = {element.overview}
              posterPath = {element.poster_path}
              rating = {element.vote_average}
              date = {element.release_date}
              mediaType = {element.media_type}
              element = {element}
              filterSinglePage = {this.props.filterSinglePage}
              displaySinglePage = {this.props.displaySinglePage}          
              displayReviewsHandler = {this.props.displayReviewsHandler}    
              displayReviews = {this.props.displayReviews}
              reviews = {this.props.reviews}
              displayTrailersHandler = {this.props.displayTrailersHandler}
              displayTrailers = {this.props.displayTrailers}
              trailers = {this.props.trailers}
              loading = {this.props.loading}
            />
          break;            
        case "person":
          card =
            <ProfileCard
              key = {element.id} 
              name = {element.name}
              posterPath = {element.profile_path}
              knownFor = {element.known_for}
              showSingleShow = {this.props.findShowById} 
              filterProfileSinglePage = {this.props.filterProfileSinglePage}
              element = {element}
              detailedProfileLoading = {this.props.detailedProfileLoading}
              displayDetailedProfile = {this.props.displayDetailedProfile}
              singleProfileDetails = {this.props.singleProfileDetails}
              singleProfileCredits = {this.props.singleProfileCredits}
              loading = {this.props.loading}
            />   
          break; 
        case "tv":
          card =
            <ShowCard 
              key = {element.id } 
              title = {element.original_name}
              overview = {element.overview}
              posterPath = {element.poster_path}
              rating = {element.vote_average}
              date = {element.first_air_date}
              mediaType = {element.media_type} 
              element = {element}
              filterSinglePage = {this.props.filterSinglePage}
              displaySinglePage = {this.props.displaySinglePage}
              displayReviewsHandler = {this.props.displayReviewsHandler}
              displayReviews = {this.props.displayReviews}
              reviews = {this.props.reviews}
              displayTrailersHandler = {this.props.displayTrailersHandler}
              displayTrailers = {this.props.displayTrailers}
              trailers = {this.props.trailers}
              loading = {this.props.loading}
            /> 
          break; 
        default:
          card = <p className="text-alert">No results</p>; 
      };

      return card;
    });

    if (this.props.displayNewSinglePage) {
      if(this.props.singlePageType === "movie"){
            resultToDisplay =
              <ShowCard 
                key = {this.props.displayedResults[0].id} 
                title = {this.props.displayedResults[0].title}
                overview = {this.props.displayedResults[0].overview}
                posterPath = {this.props.displayedResults[0].poster_path}
                rating = {this.props.displayedResults[0].vote_average}
                date = {this.props.displayedResults[0].release_date}
                mediaType = {this.props.singlePageType}
                element = {this.props.displayedResults[0]}
                filterSinglePage = {this.props.filterSinglePage}
                displaySinglePage = {this.props.displaySinglePage}
                displayReviewsHandler = {this.props.displayReviewsHandler}
                displayReviews = {this.props.displayReviews}
                reviews = {this.props.reviews}
                displayTrailersHandler = {this.props.displayTrailersHandler}
                displayTrailers = {this.props.displayTrailers}
                trailers = {this.props.trailers}
                loading = {this.props.loading}/>   
          } else {
            resultToDisplay =
              <ShowCard 
                key = {this.props.displayedResults[0].id} 
                title = {this.props.displayedResults[0].original_name}
                overview = {this.props.displayedResults[0].overview}
                posterPath = {this.props.displayedResults[0].poster_path}
                rating = {this.props.displayedResults[0].vote_average}
                date = {this.props.displayedResults[0].first_air_date}
                mediaType = {this.props.singlePageType}
                element = {this.props.displayedResults[0]}
                filterSinglePage = {this.props.filterSinglePage}
                displaySinglePage = {this.props.displaySinglePage}
                displayReviewsHandler = {this.props.displayReviewsHandler} 
                displayReviews = {this.props.displayReviews}
                reviews = {this.props.reviews}
                displayTrailersHandler = {this.props.displayTrailersHandler}
                displayTrailers = {this.props.displayTrailers}
                trailers = {this.props.trailers}
                loading = {this.props.loading}/>    
          }  
    }

    if (this.props.displayDetailedProfile || this.props.displaySinglePage) {
      goBackBtn = 
        <div className="col-12 text-left pb-1">
          <Button 
            className={`${ classes.BtnGoBack } rounded-0 py-0`}
            onClick={ this.props.showPrevResults } 
            variant="danger" >
            Go back
          </Button>
        </div>;
    }
    
    return (
      <div className="row ">
        { goBackBtn }
        { this.props.loading && !this.props.displaySinglePage ? <LoadingSpinner/> : resultToDisplay }
      </div>
    )
  };
};

export default SearchResults;