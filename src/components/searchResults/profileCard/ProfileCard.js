import React from 'react';

// Bootsrap imports
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

// Components imports
import NoImagePerson from '../../../icons/js/Person';
import NoImageCredit from '../../../icons/js/NoImage';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import Accordion from '../../accordion/Accordion';
import CreditCard from './creditCard/CreditCard';
import List from './list/List';

// CSS imports
import classes from "./ProfileCard.module.css";

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
    onClick={  () => props.filterProfileSinglePage( props.element.id ) }
    >
      <p className="mb-0">More Info</p>
    </div>;

  if (props.knownFor) {
    cardBodyContent =  
      <div>
        <p className={`${ classes.title } font-weight-bold text-left mt-2 mb-1`}>Known for </p>
        <List 
          elements={props.knownFor}
          showSingleShow={props.showSingleShow}
        />
      </div>
  }

  if (props.posterPath) {
    posterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + props.posterPath } />;
  }

  if (props.singleProfileCredits) {
    creditCardsContent = props.singleProfileCredits.map((element) => {
      let creditPosterImg = 
        <div className={`${ classes.NoImg } d-flex justify-content-center align-items-center mx-auto` }>
          <NoImageCredit fill="#ffffff" width="50px" height="50px" />
        </div>;
      if (element.poster_path) {
        creditPosterImg = <Card.Img className={`${classes.CardImg} img-fluid`} variant="left" src={ imgSrc + element.poster_path } />
      }
      return (
        <CreditCard
          id={element.id}
          mediaType={element.media_type}
          title={element.original_title}
          character={element.character}
          showSingleShow={props.showSingleShow}
          posterImg={creditPosterImg}
        />
      );
    })

    creditCards = 
      <Row noGutters='true' className={`${classes.creditCards} p-3`}>
        {creditCardsContent}
      </Row>;
  }

  if (props.detailedProfileLoading){
    cardBodyContent = 
      <div className={classes.loadingSpinner}>
        <LoadingSpinner/>
      </div>;
  } else if (props.displayDetailedProfile) {
    cardBodyContent = 
      <div>
        <p className={`${ classes.title } font-weight-bold text-left mt-2 mb-1`}>Known for </p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.singleProfileDetails.known_for_department ? props.singleProfileDetails.known_for_department : '-'}
        </p>
        <p className={`${ classes.title } font-weight-bold text-left mt-1 mb-1`}>Birthday </p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.singleProfileDetails.birthday ? props.singleProfileDetails.birthday : '-'}
        </p>
        <p className={`${ classes.title } font-weight-bold text-left mt-1 mb-1`}>Place Of Birth</p>
        <p className={`${ classes.text } text-left mb-1`}>
          {props.singleProfileDetails.place_of_birth ? props.singleProfileDetails.place_of_birth : '-'}
        </p>
      </div>;
    
    cardFooterContent = 
      <Card.Footer className={`${ classes.cardFooter } px-0 pt-2 pb-0`}>
        <Accordion 
          elements = {[
            {
              title : 'Biography',
              body : 
                <p className={`${ classes.text } ${ classes.biography }  ${props.singleProfileDetails.biography ? 'text-justify' : 'text-center'} my-3 ml-3 pr-3`}>
                  {props.singleProfileDetails.biography ? props.singleProfileDetails.biography : 'No Information'}
                </p>
            },
            {
              title : 'Starred In',
              body : creditCards 
            },
          ]}
        />
      </Card.Footer>
  }

  return (
    <div className="col-12">
      <Card className={`${classes.Card} ${props.displayDetailedProfile? classes.detailedCard : ''}  px-0 mb-3`}>
        
        <Card.Body className="d-flex p-0 flex-grow-0">
          { posterImg }
          <div className="pt-3 pl-3">
            <Card.Title className={`${classes.CardTitle} text-left font-weight-bold mb-1`}> { props.name } </Card.Title>
            { cardBodyContent }  
          </div>
        
        </Card.Body>
        {cardFooterContent}
        { props.displayDetailedProfile? '' : cardOverlay }
      </Card>
    </div>
  )
};

export default profileCard;