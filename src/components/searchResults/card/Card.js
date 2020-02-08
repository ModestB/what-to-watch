import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { filterSinglePage } from '../../../store/actions/actions';

// Components imports
import CardContent from './cardContent/CardContent';
import CreditCards from './creditCards/CreditCards';
import PosterImg from './posterImg/PosterImg';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import BookmarkButton from '../../bookmarks/bookmarkBtn/BookmarkBtn';
import Badge from './badge/Badge'
import Trailers from './trailers/Trailers';
import Reviews from './reviews/Reviews';
import CardFooter from './cardFooter/CardFooter';

// Style imports
import classes from "./Card.module.scss";

const card = (props) => {
  let accordionElements = null;
  let cardOverlay = 
    <div 
      className={`${classes.overlay}`} 
      onClick={  () => props.filterSinglePage(props.element, props.displayedResults) }>
      <p>More Info</p>
    </div>;

  if (props.displaySinglePage) {
    cardOverlay = null;
  }

  if (props.cardType != 'person') {
    accordionElements = [
      {
        title : 'Trailers',
        body : 
          <Trailers 
            trailersData={props.trailersData}
            displayTrailers={props.displayTrailers}
          />,
        id: props.element.id
      },
      {
        title : 'Reviews',
        body : 
          <Reviews 
            reviewsData={props.reviewsData}
            displayReviews={props.displayReviews}
          />,
        id: props.element.id
      },
    ]
  } else {
    accordionElements = [
      {
        title : 'Biography',
        body : 
          <h6 
            className=
              {`${props.profileDetails.biography ? classes.text : ''} ${ classes.biography }  
                ${props.profileDetails.biography ? 'text-justify' : 'text-center'} 
                customScroll my-0 ml-3 pr-3 pb-3`}
          >
            {props.profileDetails.biography ? props.profileDetails.biography : 'No Information'}
          </h6>,
        id: props.element.id
      },
      {
        title : 'Starred In',
        body : <CreditCards/>,
        id: props.element.id 
      },
    ]
  }

  let content = 
    // TODO: maybe change to AUX
    <div className={`${classes.card}`}>
      <Badge rating={props.rating}/>
      
      <div className={`${classes.body}`}>
        <PosterImg posterPath={props.posterPath}/>
        <BookmarkButton 
          id={props.element.id}
          mediaType={props.mediaType}
          title={props.title}
          date={props.date ? props.date.substring(0, 4) : 'Not specified'}      
        />

        <CardContent 
          displaySinglePage={props.displaySinglePage}
          cardType={props.cardType}
          showTitle={props.title}
          showOverview={props.overview}
          showMediaType={props.mediaType}
          showDate={props.date}
          personName={props.name}
          profileDetails={props.profileDetails}
          profileKnownFor={props.knownFor}
          
        />
      </div>
  
      
      <CardFooter 
        displaySinglePage={props.displaySinglePage}
        elements={accordionElements}
      />

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
    loadingShowCard: state.loadingShowCard,
    profileDetails: state.profileDetails,
    profileCredits: state.profileCredits,
    loadingProfile: state.loadingProfile
  }
}

const mapStateDispatch = dispatch => {
  return {
    filterSinglePage: (element, displayedResults) => dispatch(filterSinglePage(element, displayedResults))
  }
}

export default connect(mapStateProps, mapStateDispatch)(card);