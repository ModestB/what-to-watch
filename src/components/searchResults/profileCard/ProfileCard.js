import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { filterSinglePage } from '../../../store/actions/actions';

// Bootsrap imports
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

// Components imports
import NoImagePerson from '../../../icons/js/Person';
import NoImageCredit from '../../../icons/js/NoImage';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import Accordion from '../../../containers/accordion/Accordion';
import CreditCard from './creditCard/CreditCard';
import List from './list/List';

// CSS imports
import classes from "./ProfileCard.module.scss";

const profileCard = (props) => {
  let cardBodyContent = null;
  let cardFooterContent = null;
  let creditCards = null;
  let creditCardsContent = null;
  let imgSrc = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  let posterImg = 
    <div 
      className={`${ classes.NoImg } d-flex justify-content-center align-items-center` }
    >
      <NoImagePerson fill="#ffffff" width="75px" height="75px" />
    </div>;
  let cardOverlay = 
    <div 
    className={`${classes.CardOverlay} d-flex align-items-center justify-content-center px-2`} 
    onClick={  () => props.filterSinglePage( props.element, props.displayedResults ) }
    >
      <p className="mb-0">More Info</p>
    </div>;

  if (props.knownFor) {
    cardBodyContent =  
      <div>
        <p className={`${ classes.title } font-weight-bold text-left mt-2 mb-1`}>Known for </p>
        <List 
          elements={props.knownFor}
        />
      </div>
  }

  if (props.posterPath) {
    posterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + props.posterPath } />;
  }

  if (props.profileCredits) {
    creditCardsContent = props.profileCredits.map((element) => {
      let creditPosterImg = 
        <div className={`${ classes.NoImg } d-flex justify-content-center align-items-center mx-auto` }>
          <NoImageCredit fill="#ffffff" width="50px" height="50px" />
        </div>;
      if (element.poster_path) {
        creditPosterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + element.poster_path } />
      }
      return (
        <CreditCard
          key={element.id}
          id={element.id}
          mediaType={element.media_type}
          title={element.original_title}
          character={element.character}
          posterImg={creditPosterImg}
        />
      );
    })

    creditCards = 
      <Row noGutters='true' className={`${classes.creditCards} customScroll p-3`}>
        {creditCardsContent}
      </Row>;
  }

  if (props.displaySinglePage) {
    cardBodyContent = 
      <div>
        <p className={`${ classes.title } font-weight-bold text-left mt-2 mb-1`}>Known for </p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.profileDetails.known_for_department ? props.profileDetails.known_for_department : '-'}
        </p>
        <p className={`${ classes.title } font-weight-bold text-left mt-1 mb-1`}>Birthday </p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.profileDetails.birthday ? props.profileDetails.birthday : '-'}
        </p>
        <p className={`${ classes.title } font-weight-bold text-left mt-1 mb-1`}>Place Of Birth</p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.profileDetails.place_of_birth ? props.profileDetails.place_of_birth : '-'}
        </p>
      </div>;
    
    cardFooterContent = 
      <Card.Footer className={`${ classes.cardFooter } mt-auto px-0 pt-2 pb-0`}>
        <Accordion 
          elements = {[
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
              body : creditCards,
              id: props.element.id 
            },
          ]}
        />
      </Card.Footer>
  }

  let content = 
    <div className="d-flex flex-column h-100">
      <div className="d-flex h-100">
        <Card.Body className="d-flex p-0 ">
          { posterImg }
          <div className="d-flex flex-column pt-3 pl-3 pb-1 w-100">
            <Card.Title className={`${classes.CardTitle} text-left font-weight-bold mb-1`}> { props.name } </Card.Title>
            { cardBodyContent }  
          </div> 
        </Card.Body>
      </div>
        
      {cardFooterContent}
      
      { props.displaySinglePage? '' : cardOverlay }
    </div>;

  return (
    <div className="col flex-grow-0">
      <Card className={`${classes.Card} ${props.displaySinglePage ? classes.detailedCard : ''}  px-0`}>

        { props.loadingProfile ? <LoadingSpinner /> : content }

      </Card>
    </div>
  )
};

const mapStateProps = state => {
  return {
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
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

export default connect(mapStateProps, mapStateDispatch)(profileCard);