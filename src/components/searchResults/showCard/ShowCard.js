import React, { Component}  from 'react';

// Components imports
import ReviewCard from './reviewCard/ReviewCard';
import TrailerCard from './trailerCard/TrailerCard';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import NoImage from '../../../icons/js/NoImage';
import Accordion from '../../accordion/Accordion';

// Style imports
import classes from "./ShowCard.module.css";

class ShowCard extends Component{
  // constructor(props) {
  //   super(props);
  // }
  
  render () {
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
        onClick={  () => this.props.filterSinglePage(this.props.element) }>
        <p className="mb-0">More Info</p>
      </div>;
  
    if(this.props.rating){
      let badgeVariant = 'success';
  
      if( this.props.rating > 4 && this.props.rating < 7){
        badgeVariant = "warning";
      } else if ( this.props.rating <= 4 ) {
        badgeVariant = "danger";
      }
      badge = <Badge className={`${ classes.Badge } d-flex align-items-center justify-content-center`} variant={ badgeVariant }> { this.props.rating } </Badge>;
    }
  
    if(this.props.overview && !this.props.displaySinglePage) {
      cardText = <Card.Text className={`${classes.CardText} text-left mb-2 pr-3`}> { this.props.overview.substring(0, 150) + "..."  } </Card.Text>;
    } else {
      cardText = <Card.Text className={`${ [classes.CardText, classes.textOverview].join(' ') } text-justify mb-2 pr-3`}> { this.props.overview } </Card.Text>;
    }
   
    if(!this.props.displaySinglePage) {
      cardTitle =
        <Card.Title className={`${classes.CardTitle} text-left font-weight-bold`} title={ this.props.title }> 
          { this.props.title.length > 25 ? this.props.title.substring(0, 25) + "..." :  this.props.title } 
        </Card.Title> 
    } else {
      cardTitle =
        <Card.Title className={`${classes.CardTitle} text-left font-weight-bold`} title={ this.props.title }> 
          { this.props.title } 
        </Card.Title>
    }
  
    if(this.props.mediaType === 'movie'){
      date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Released Date: { this.props.date }</p>
    } else {
      date = <p className={`${classes.date} text-right mb-0 mt-auto pr-3`} >Air Date: { this.props.date }</p>
    }
  
    if(this.props.posterPath) {
      posterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + this.props.posterPath } />;
    }
  
    if (this.props.displayReviews) {
      if (this.props.reviews.length > 0) {
        reviews = this.props.reviews.map( element => {
          return (
            <ReviewCard 
              key={element.id}
              author={element.author}
              content={element.content} />
          )
        })
      } else {
        reviews = <h6 className="mb-3 pr-3">No Reviews</h6>
      }
      reviewsContainer = 
        <div className="mb-3">
          <div className={`${this.props.reviews.length > 0 ? classes.reviews : ''} d-flex flex-column pl-3 pt-3`}>  
            { reviews }
          </div>
        </div>  
    }
  
    if (this.props.displayTrailers) {
      if (this.props.trailers.length > 0) {
        trailers = this.props.trailers.map(element => {
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
          <div className={`${this.props.trailers.length > 0 ? classes.trailers : ''} p-3`}>
            { trailers }
          </div>
        </div>;
    }
  
    if (this.props.displaySinglePage) {
      cardFooterContent  = 
        <Card.Footer className={`${classes.CardFooter} p-0 mt-2`}>
          <Accordion 
            elements = {[
              {
                title : 'Trailers',
                body : trailersContainer
              },
              {
                title : 'Reviews',
                body : reviewsContainer
              },
            ]}
          />
        </Card.Footer>
      cardOverlay = null;
    }
    
    return (
      <div className="col-12">
        <Card className={`${classes.Card} flex-column px-0 mb-3 ${ this.props.displaySinglePage ? classes.SinglePage : ''}`}>
          <div className="d-flex h-100">
            { badge }
          
            <Card.Body className="d-flex p-0">
              { posterImg }
              <div class="d-flex flex-column pt-3 pl-3 pb-1 w-100">
                { cardTitle }
                { cardText }
                { date }  
              </div>
                
            </Card.Body>
          </div>
          { cardFooterContent }
        
          { this.props.loading && (this.props.displayTrailers || this.props.displayReviews)? <LoadingSpinner /> : null}   

          { cardOverlay }
        </Card>
      </div>
    )
  }
}

export default ShowCard;