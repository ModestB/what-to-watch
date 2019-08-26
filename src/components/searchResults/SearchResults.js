import React from "react";

// Components imports
import ShowCard from "./showCard/ShowCard";
import ProfileCard from "./profileCard/ProfileCard";
import Button from 'react-bootstrap/Button';

// Style imports
import classes from "./SearchResults.module.scss";

const SearchResults = (props) => {
  let resultToDisplay = null;
  let goBackBtn = null;
  let searchResultClasses = null;

  resultToDisplay = props.displayedResults.map(element => {
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
            filterSinglePage = {props.filterSinglePage}
            displaySinglePage = {props.displaySinglePage}          
            displayReviewsHandler = {props.displayReviewsHandler}    
            displayReviews = {props.displayReviews}
            reviews = {props.reviews}
            displayTrailersHandler = {props.displayTrailersHandler}
            displayTrailers = {props.displayTrailers}
            trailers = {props.trailers}
            loading = {props.loadingShowCard}
          />
        break;            
      case "person":
        card =
          <ProfileCard
            key = {element.id} 
            name = {element.name}
            posterPath = {element.profile_path}
            knownFor = {element.known_for}
            showSingleShow = {props.findShowById} 
            filterProfileSinglePage = {props.filterProfileSinglePage}
            element = {element}
            detailedProfileLoading = {props.detailedProfileLoading}
            displayDetailedProfile = {props.displayDetailedProfile}
            singleProfileDetails = {props.singleProfileDetails}
            singleProfileCredits = {props.singleProfileCredits}
            loading = {props.loadingProfile}
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
            filterSinglePage = {props.filterSinglePage}
            displaySinglePage = {props.displaySinglePage}
            displayReviewsHandler = {props.displayReviewsHandler}
            displayReviews = {props.displayReviews}
            reviews = {props.reviews}
            displayTrailersHandler = {props.displayTrailersHandler}
            displayTrailers = {props.displayTrailers}
            trailers = {props.trailers}
            loading = {props.loadingShowCard}
          /> 
        break; 
      default:
        card =
          <ShowCard 
            key = {element.id } 
            title = {element.original_name ? element.original_name : element.original_title}
            overview = {element.overview}
            posterPath = {element.poster_path}
            rating = {element.vote_average}
            date = {element.first_air_date ? element.first_air_date : element.release_date}
            mediaType = {element.original_name ? 'tv' : 'movie'} 
            element = {element}
            filterSinglePage = {props.filterSinglePage}
            displaySinglePage = {props.displaySinglePage}
            displayReviewsHandler = {props.displayReviewsHandler}
            displayReviews = {props.displayReviews}
            reviews = {props.reviews}
            displayTrailersHandler = {props.displayTrailersHandler}
            displayTrailers = {props.displayTrailers}
            trailers = {props.trailers}
            loading = {props.loadingShowCard}
          /> 

    };

    return card;
  });

  if (props.displayNewSinglePage) {
    if(props.singlePageType === "movie"){
      resultToDisplay =
        <ShowCard 
          key = {props.displayedResults[0].id} 
          title = {props.displayedResults[0].title}
          overview = {props.displayedResults[0].overview}
          posterPath = {props.displayedResults[0].poster_path}
          rating = {props.displayedResults[0].vote_average}
          date = {props.displayedResults[0].release_date}
          mediaType = {props.singlePageType}
          element = {props.displayedResults[0]}
          filterSinglePage = {props.filterSinglePage}
          displaySinglePage = {props.displaySinglePage}
          displayReviewsHandler = {props.displayReviewsHandler}
          displayReviews = {props.displayReviews}
          reviews = {props.reviews}
          displayTrailersHandler = {props.displayTrailersHandler}
          displayTrailers = {props.displayTrailers}
          trailers = {props.trailers}
          loading = {props.loadingShowCard}
        />   
    } else {
      resultToDisplay =
        <ShowCard 
          key = {props.displayedResults[0].id} 
          title = {props.displayedResults[0].original_name}
          overview = {props.displayedResults[0].overview}
          posterPath = {props.displayedResults[0].poster_path}
          rating = {props.displayedResults[0].vote_average}
          date = {props.displayedResults[0].first_air_date}
          mediaType = {props.singlePageType}
          element = {props.displayedResults[0]}
          filterSinglePage = {props.filterSinglePage}
          displaySinglePage = {props.displaySinglePage}
          displayReviewsHandler = {props.displayReviewsHandler} 
          displayReviews = {props.displayReviews}
          reviews = {props.reviews}
          displayTrailersHandler = {props.displayTrailersHandler}
          displayTrailers = {props.displayTrailers}
          trailers = {props.trailers}
          loading = {props.loadingShowCard}
        />    
    }  
  }

  if (props.displayDetailedProfile || props.displaySinglePage) {
    goBackBtn = 
      <div className="col-12 text-left pb-1">
        <Button 
          className={`${ classes.BtnGoBack } rounded-0 py-0`}
          onClick={ props.showPrevResults } 
          variant="danger" >
          Go back
        </Button>
      </div>;
  }

  if (!props.displaySinglePage && !props.displayDetailedProfile) {
    searchResultClasses = `${classes.resultsContainer} customScroll`
  }
 
  return (
    <div className={`${searchResultClasses} row flex-column flex-nowrap justify-content-start align-items-center`}>
      { goBackBtn }
      { resultToDisplay }
    </div>
  )
};

export default SearchResults;