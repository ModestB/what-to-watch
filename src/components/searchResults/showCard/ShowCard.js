import React from 'react';

// Components imports
import ReviewCard from './reviewCard/ReviewCard';
import TrailerCard from './trailerCard/TrailerCard';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import NoImage from '../../../icons/js/NoImage';
import Accordion from '../../accordion/Accordion';

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
  let posterImg = <div className={`${ classes.NoImg } d-flex justify-content-center align-items-center` }><NoImage fill="#ffffff" width="50px" height="50px" /></div>;
  let cardOverlay = 
    <div 
      className={`${classes.CardOverlay} d-flex align-items-center justify-content-center px-2`} 
      onClick={  () => props.filterSinglePage(props.element, props.mediaType) }>
      <p className="mb-0">More Info</p>
    </div>;

  if(props.rating){
    let badgeVariant = 'success';

    if( props.rating > 4 && props.rating < 7){
      badgeVariant = "warning";
    } else if ( props.rating <= 4 ) {
      badgeVariant = "danger";
    }
    badge = <Badge className={`${ classes.Badge } d-flex align-items-center justify-content-center`} variant={ badgeVariant }> { props.rating } </Badge>;
  }

  if(props.overview && !props.displaySinglePage) {
    cardText = <Card.Text className={`${classes.CardText} text-left mb-2 pr-3`}> { props.overview.substring(0, 130) + "..."  } </Card.Text>;
  } else {
    cardText = <Card.Text className={`${ [classes.CardText, classes.textOverview].join(' ') } customScroll text-justify mb-2 pr-3`}> { props.overview } </Card.Text>;
  }
 
  if(!props.displaySinglePage) {
    cardTitle =
      <Card.Title className={`${classes.CardTitle} text-left font-weight-bold`} title={ props.title }> 
        { props.title.length > 40 ? props.title.substring(0, 40) + "..." :  props.title } 
      </Card.Title> 
  } else {
    cardTitle =
      <Card.Title className={`${classes.CardTitle} text-left font-weight-bold`} title={ props.title }> 
        { props.title } 
      </Card.Title>
  }

  if(props.mediaType === 'movie'){
    date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Released Date: { props.date }</p>
  } else {
    date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Air Date: { props.date }</p>
  }

  if(props.posterPath) {
    posterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + props.posterPath } />;
  }

  if (props.displayReviews) {
    if (props.reviews.length > 0) {
      reviews = props.reviews.map( element => {
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
        <div className={`${props.reviews.length > 0 ? classes.reviews : ''} customScroll d-flex flex-column pl-3 pt-3`}>  
          { reviews }
        </div>
      </div>  
  }

  if (props.displayTrailers) {
    if (props.trailers.length > 0) {
      trailers = props.trailers.map(element => {
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
        <div className={`${props.trailers.length > 0 ? classes.trailers : ''} customScroll p-3`}>
          { trailers }
        </div>
      </div>;
  }

  if (props.displaySinglePage) {
    cardFooterContent  = 
      <Card.Footer className={`${classes.CardFooter} p-0 mt-2`}>
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
 
  return (
    <div className="col flex-grow-0">
      <Card className={`${classes.Card} flex-column px-0 mb-3 ${ props.displaySinglePage ? classes.SinglePage : ''}`}>
        <div className="d-flex h-100">
          { badge }
        
          <Card.Body className="d-flex p-0">
            { posterImg }
            <div className="d-flex flex-column pt-3 pl-3 pb-1 w-100">
              { cardTitle }
              { cardText }
              { date }  
            </div>      
          </Card.Body>
        </div>

        { props.loading ? <LoadingSpinner /> : cardFooterContent }

        { cardOverlay }
      </Card>
    </div>
  )
  
}

export default ShowCard;