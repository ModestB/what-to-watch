import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { filterSinglePage } from '../../../store/actions/actions';

// Components imports
import ReviewCard from './reviewCard/ReviewCard';
import TrailerCard from './trailerCard/TrailerCard';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
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
  let posterImg = <div className={`${ [classes.posterImg, classes.posterImgPlaceholder].join(' ')} d-flex justify-content-center align-items-center` }><NoImage fill="#ffffff" width="50px" height="50px" /></div>;
  let cardOverlay = 
    <div 
      className={`${classes.overlay} d-flex align-items-center justify-content-center px-2`} 
      onClick={  () => props.filterSinglePage(props.element, props.displayedResults) }>
      <p className="mb-0">More Info</p>
    </div>;

  if(props.rating){
    let badgeVariant = 'success';

    if( props.rating > 4 && props.rating < 7){
      badgeVariant = "warning";
    } else if ( props.rating <= 4 ) {
      badgeVariant = "danger";
    }
    badge = <Badge className={`${classes.badge} d-flex align-items-center justify-content-center`} variant={ badgeVariant }> { props.rating } </Badge>;
  }

  if(props.overview && !props.displaySinglePage) {
    cardText = <Card.Text className={`${classes.description} text-left mb-2 pr-3`}> { props.overview.substring(0, 130) + "..."  } </Card.Text>;
  } else {
    cardText = <Card.Text className={`${ [classes.description, classes.descriptionOverview].join(' ') } customScroll text-justify mb-2 pr-3`}> { props.overview } </Card.Text>;
  }
 
  if(!props.displaySinglePage) {
    cardTitle =
      <Card.Title className={`${classes.title} text-left font-weight-bold`} title={ props.title }> 
        { props.title.length > 40 ? props.title.substring(0, 40) + "..." :  props.title } 
      </Card.Title> 
  } else {
    cardTitle =
      <Card.Title className={`${classes.title} text-left font-weight-bold`} title={ props.title }> 
        { props.title } 
      </Card.Title>
  }

  if(props.mediaType === 'movie'){
    date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Released Date: { props.date }</p>
  } else {
    date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Air Date: { props.date }</p>
  }

  if(props.posterPath) {
    posterImg = <Card.Img className={`${classes.posterImg} img-fluid`} variant="left" src={ imgSrc + props.posterPath } />;
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
      reviews = <h6 className="mb-3 pr-3">No Reviews</h6>
    }
    reviewsContainer = 
      <div className="mb-3">
        <div className={`${props.reviewsData.length > 0 ? classes.reviews : ''} customScroll d-flex flex-column pl-3`}>  
          { reviews }
        </div>
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
      trailers = <h6 className="mb-3 pr-3">No Trailers</h6>
    }
    trailersContainer = 
      <div className="">
        <div className={`${props.trailersData.length > 0 ? classes.trailers : ''} customScroll px-3`}>
          { trailers }
        </div>
      </div>;
  }

  if (props.displaySinglePage) {
    cardFooterContent  = 
      <Card.Footer className={`${classes.footer} p-0 mt-auto`}>
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
      </Card.Footer>
    cardOverlay = null;
  }

  let content = 
    // TODO: maybe change to AUX 
    <div className="d-flex flex-column h-100">
      <div className="d-flex h-100">

        { badge }
        
        <Card.Body className="d-flex p-0">
          { posterImg }
          <BookmarkButton 
            id={props.element.id}
            mediaType={props.mediaType}
            title={props.title}
            date={props.date ? props.date.substring(0, 4) : 'Not specified'}      
          />
          <div className="d-flex flex-column pt-3 pl-3 pb-1 w-100">
            { cardTitle }
            { cardText }
            { date }  
          </div>      
        </Card.Body>
      </div>
      
      { cardFooterContent }

      { cardOverlay }
    </div>;
 
  return (
    <div className="col flex-grow-0">
      <Card className={`${classes.container} flex-column px-0 ${ props.displaySinglePage ? classes.singlePage : ''}`}>

        { props.loadingShowCard ? <LoadingSpinner /> : content }
        
      </Card>
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