import React, { Component } from "react";
import { connect } from 'react-redux';

// Action Types
import {
  showPreviousResults,
  getTrendingShows,
  getShowsByGenre
} from '../../store/actions/actions';

// Components imports
import Card from "../../components/searchResults/card/Card";

// Style imports
import classes from "./SearchResults.module.scss";

class SearchResults extends Component{
  constructor(props) {
    super(props)
    this.resultsContainer = React.createRef();
  } 

  componentDidUpdate() {
    this.resultsContainer.current.scrollTo(0, 0);
  }

  render () {
    let resultToDisplay = null;
    let navigation = null;
    let searchResultClasses = null;
  
    resultToDisplay = this.props.displayedResults.map(element => {
      let card = null;
      switch (element.media_type) {
        case "movie":
          card =
            <Card 
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
            <Card
              key = {element.id} 
              cardType = 'person'
              name = {element.name}
              posterPath = {element.profile_path}
              knownFor = {element.known_for}
              element = {element}
            />   
          break; 
        case "tv":
          card =
            <Card 
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
            <Card 
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
  
    if (this.props.displaySinglePage && !this.props.displayFilteredPage) {
      if(this.props.singlePageType === "movie"){
        resultToDisplay =
          <Card 
            key = {this.props.displayedResults[0].id} 
            title = {this.props.displayedResults[0].title}
            overview = {this.props.displayedResults[0].overview}
            posterPath = {this.props.displayedResults[0].poster_path}
            rating = {this.props.displayedResults[0].vote_average}
            date = {this.props.displayedResults[0].release_date}
            mediaType = {this.props.singlePageType}
            element = {this.props.displayedResults[0]}
          />   
      } else {
        resultToDisplay =
          <Card 
            key = {this.props.displayedResults[0].id} 
            title = {this.props.displayedResults[0].original_name}
            overview = {this.props.displayedResults[0].overview}
            posterPath = {this.props.displayedResults[0].poster_path}
            rating = {this.props.displayedResults[0].vote_average}
            date = {this.props.displayedResults[0].first_air_date}
            mediaType = {this.props.singlePageType}
            element = {this.props.displayedResults[0]}
          />    
      }  
    }
  
    if (this.props.displaySinglePage) {
      let similarButton = null;
      if (this.props.singlePageType !== 'person') {
        similarButton =    
          <button
            className='btn btn--primary btn--small'
            onClick={ () => this.props.getShowsByGenre(this.props.displayedResults[0].genre_ids, this.props.singlePageType) } 
          >
            Similar
          </button>
      }
      navigation = 
        <header className={`${classes.btn__group}`}>
          <button
            className='btn btn--danger btn--small'
            onClick={ () => this.props.showPreviousResults([...this.props.searchResults])} 
          >
            Go back
          </button>
          <button
            className='btn btn--primary btn--small'
            onClick={ () => this.props.getTrendingShows() } 
          >
            Trending
          </button>
          
          {similarButton}
       
        </header>;
    }
  
    if (!this.props.displaySinglePage) {
      searchResultClasses = `${classes.wrp} customScroll`
    }
   
    return (
      <section id="searchResults" className={`${classes.container}`}>
        <div className={`${searchResultClasses}`}  ref={this.resultsContainer}>
          { navigation }
          { resultToDisplay }
        </div>
      </section>
    )
  }

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
    getShowsByGenre: (genreIds, singlePageType) => dispatch(getShowsByGenre(genreIds, singlePageType)),
  }
}

export default connect(mapStateProps, mapStateDispatch)(SearchResults);