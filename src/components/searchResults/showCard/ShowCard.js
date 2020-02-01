import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { filterSinglePage } from '../../../store/actions/actions';

// Components imports
import ReviewCard from './reviewCard/ReviewCard';
import TrailerCard from './trailerCard/TrailerCard';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import NoImage from '../../../icons/js/NoImage';
import Accordion from '../../../containers/accordion/Accordion';
import BookmarkButton from '../../bookmarks/bookmarkBtn/BookmarkBtn';

// Style imports
import classes from "./ShowCard.module.scss";

const ShowCard = (props) => {

  let imgSrc = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  let badge = null;
  let cardText = null;
  let cardTitle = null;
  let date = null;
  let cardFooterContent = null;
  let reviewsContainer = null;
  let reviews = null;
  let trailersContainer = null;
  let trailers = null;
  let posterImg = <div className={`${ [classes.posterImg, classes.posterImgPlaceholder].join(' ')}`}><NoImage fill="#ffffff" width="50px" height="50px" /></div>;

  let cardOverlay = 
    <div 
      className={`${classes.overlay}`} 
      onClick={  () => props.filterSinglePage(props.element, props.displayedResults) }>
      <p>More Info</p>
    </div>;

  if(props.rating){
    let badgeVariant = classes.badgeSuccess;

    if( props.rating > 4 && props.rating < 7){
      badgeVariant = classes.badgeWarning;
    } else if ( props.rating <= 4 ) {
      badgeVariant = classes.badgeDanger;
    }
    badge = <span className={`${[classes.badge, badgeVariant].join(' ')}`}> { props.rating } </span>;
  }

  if(props.overview && !props.displaySinglePage) {
    cardText = <p className={`${classes.description}`}> { props.overview.substring(0, 130) + "..."  } </p>;
  } else {
    cardText = <p className={`${ [classes.description, classes.descriptionOverview].join(' ') } customScroll`}> { props.overview } </p>;
  }
 
  if(!props.displaySinglePage) {
    cardTitle =
      <div className={`${classes.title}`} title={ props.title }> 
        { props.title.length > 40 ? props.title.substring(0, 40) + "..." :  props.title } 
      </div> 
  } else {
    cardTitle =
      <div className={`${classes.title}`} title={ props.title }> 
        { props.title } 
      </div>
  }

  if(props.mediaType === 'movie'){
    date = <p className={`${classes.date}`} >Released Date: { props.date }</p>
  } else {
    date = <p className={`${classes.date}`} >Air Date: { props.date }</p>
  }

  if(props.posterPath) {
    posterImg = <img className={`${classes.posterImg}`} src={ imgSrc + props.posterPath } />;
  }

  if (props.displayReviews) {
    if (props.reviewsData.length > 0) {
      reviews = props.reviewsData.map( element => {
        return (
          <ReviewCard 
            key={element.id}
            author={element.author}
            content={element.content} 
          />
        )
      })
    } else {
      reviews = <h6>No Reviews</h6>
    }
    reviewsContainer = 
      <div className={`${props.reviewsData.length > 0 ? classes.reviews : ''} customScroll`}>  
        { reviews }
      </div>
  }

  if (props.displayTrailers) {
    if (props.trailersData.length > 0) {
      trailers = props.trailersData.map(element => {
        return (
          <TrailerCard 
            key={element.id}
            youtubeKey={element.key}
            title={element.name}
          />
        )
      }) 
    } else {
      trailers = <h6>No Trailers</h6>
    }
    trailersContainer =  
      <div className={`${props.trailersData.length > 0 ? classes.trailers : ''} customScroll`}>
        { trailers }
      </div>;
  }

  if (props.displaySinglePage) {
    cardFooterContent  = 
      <footer className={`${classes.footer}`}>
        <Accordion 
          elements = {[
            {
              title : 'Trailers',
              body : trailersContainer,
              id: props.element.id
            },
            {
              title : 'Reviews',
              body : reviewsContainer,
              id: props.element.id
            },
          ]}
        />
      </footer>
    cardOverlay = null;
  }

  let content = 
    // TODO: maybe change to AUX 
    <div className={`${classes.card}`}>
      { badge }
      
      <div className={`${classes.body}`}>
        { posterImg }
        <BookmarkButton 
          id={props.element.id}
          mediaType={props.mediaType}
          title={props.title}
          date={props.date ? props.date.substring(0, 4) : 'Not specified'}      
        />
        <div className={`${classes.content}`}>
          { cardTitle }
          { cardText }
          { date }  
        </div>      
      </div>
  
      
      { cardFooterContent }

      { cardOverlay }
    </div>;
 
  return (
    <div className={`${classes.container}`}>
      <section className={`${classes.card__wrp} ${ props.displaySinglePage ? classes.singlePage : ''}`}>

        { props.loadingShowCard ? <LoadingSpinner /> : content }
        
      </section>
    </div>
  )
  
}

const mapStateProps = state => {
  return {
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayReviews: state.displayReviews,
    reviewsData: state.reviewsData,
    displayTrailers: state.displayTrailers,
    trailersData: state.trailersData,
    loadingShowCard: state.loadingShowCard
  }
}

const mapStateDispatch = dispatch => {
  return {
    filterSinglePage: (element, displayedResults) => dispatch(filterSinglePage(element, displayedResults))
  }
}

export default connect(mapStateProps, mapStateDispatch)(ShowCard);