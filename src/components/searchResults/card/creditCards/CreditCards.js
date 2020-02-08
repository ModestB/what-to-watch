import React from 'react';

import { connect } from 'react-redux';

import CreditCard from './creditCard/CreditCard';
import classes from './CreditCards.module.scss';

import NoImageCredit from '../../../../icons/js/NoImage';

const creditCards = (props) => {
  let content = null;
  let imgSrc = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  let creditCardsContent = props.profileCredits.map((element) => {
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

  content =      
    <div className={`${classes.creditCards} customScroll`}>
      {creditCardsContent}
    </div>;
  return (
    content
  )
}

const mapStateProps = state => {
  return {
    profileCredits: state.profileCredits
  }
}

export default connect(mapStateProps, null)(creditCards);