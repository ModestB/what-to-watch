import React from "react";
import { connect } from 'react-redux';

// Action Types
import {
  showPreviousResults,
  getTrendingShows
} from '../../store/actions/actions';


// Components imports
import ShowCard from "./showCard/ShowCard";
import ProfileCard from "./profileCard/ProfileCard";
import Button from 'react-bootstrap/Button';
import MovieDb from '../../icons/js/Moviedb';

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
          />
        break;            
      case "person":
        card =
          <ProfileCard
            key = {element.id} 
            name = {element.name}
            posterPath = {element.profile_path}
            knownFor = {element.known_for}
            element = {element}
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
          /> 
    };

    return card;
  });

  if (props.displaySinglePage && !props.displayFilteredPage) {
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
        />    
    }  
  }

  if (props.displaySinglePage) {
    goBackBtn = 
      <div className="col text-left pb-1">
        <Button 
          className={`${ classes.Btn } rounded-0 py-0`}
          onClick={ () => props.showPreviousResults([...props.searchResults])} 
          variant="danger" 
        >
          Go back
        </Button>
        <Button 
          className={`${ classes.Btn } rounded-0 py-0 ml-2`}
          onClick={ () => props.getTrendingShows() } 
          variant="primary" 
        >
          Trending
        </Button>
      </div>;
  }

  if (!props.displaySinglePage) {
    searchResultClasses = `${classes.resultsContainer} customScroll`
  }
 
  return (
    <div className="d-flex flex-column">
      <div className={`${searchResultClasses} row flex-column flex-nowrap justify-content-start align-items-center`}>
        { goBackBtn }
        { resultToDisplay }
      </div>
      <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="ml-auto mt-auto pt-2 pb-1 pr-1">
        <MovieDb height="50px" width="120px"/>
      </a>     
    </div>
  )
};

const mapStateProps = state => {
  return {
    searchResults: state.searchResults,
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayFilteredPage: state.displayFilteredPage,
    singlePageType: state.singlePageType
  }
}

const mapStateDispatch = dispatch => {
  return {
    showPreviousResults: (prevResults) => dispatch(showPreviousResults(prevResults)),
    getTrendingShows: () => dispatch(getTrendingShows()),
  }
}

export default connect(mapStateProps, mapStateDispatch)(SearchResults);