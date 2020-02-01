import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { filterSinglePage } from '../../../store/actions/actions';

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
      className={`${ [classes.posterImg, classes.posterImgPlaceholder].join(' ') }` }
    >
      <NoImagePerson fill="#ffffff" width="75px" height="75px" />
    </div>;
  let cardOverlay = 
    <div 
      className={`${classes.overlay}`} 
      onClick={  () => props.filterSinglePage( props.element, props.displayedResults ) }
    >
      <p>More Info</p>
    </div>;

  if (props.knownFor) {
    cardBodyContent =  
      <div>
        <p className={`${ classes.title }`}>Known for </p>
        <List 
          elements={props.knownFor}
        />
      </div>
  }

  if (props.posterPath) {
    posterImg = <img className={`${classes.posterImg}`} src={ imgSrc + props.posterPath } />;
  }

  if (props.profileCredits) {
    creditCardsContent = props.profileCredits.map((element) => {
      let creditPosterImg = 
        <div className={`${ [classes.posterImg, classes.posterImgPlaceholder].join(' ')}` }>
          <NoImageCredit fill="#ffffff" width="50px" height="50px" />
        </div>;
      if (element.poster_path) {
        creditPosterImg = <img className={`${classes.posterImg}`} src={ imgSrc + element.poster_path } />
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
      <div className={`${classes.creditCards} customScroll`}>
        {creditCardsContent}
      </div>;
  }

  if (props.displaySinglePage) {
    cardBodyContent = 
      <div>
        <p className={`${ classes.title }`}>Known for </p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.known_for_department ? props.profileDetails.known_for_department : '-'}
        </p>
        <p className={`${ classes.title }`}>Birthday </p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.birthday ? props.profileDetails.birthday : '-'}
        </p>
        <p className={`${ classes.title }`}>Place Of Birth</p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.place_of_birth ? props.profileDetails.place_of_birth : '-'}
        </p>
      </div>;
    
    cardFooterContent = 
      <footer className={`${ classes.footer}`}>
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
      </footer>
  }

  let content = 
    <div className={`${classes.card}`}>
      <div className={`${classes.body}`}>
        { posterImg }
        <div className={`${classes.content}`}>
          <div className={`${classes.title}`}> { props.name } </div>
          { cardBodyContent }  
        </div> 
      </div>

      {cardFooterContent}
      
      { props.displaySinglePage? '' : cardOverlay }
    </div>;

  return (
    <div className={`${classes.container}`}>
      <section className={`${classes.card__wrp} ${props.displaySinglePage ? classes.singlePage : ''}`}>

        { props.loadingProfile ? <LoadingSpinner /> : content }

      </section>
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