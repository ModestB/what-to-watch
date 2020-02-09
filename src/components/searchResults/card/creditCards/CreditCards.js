import React from 'react';

import { connect } from 'react-redux';

import CreditCard from './creditCard/CreditCard';
import classes from './CreditCards.module.scss';

const creditCards = (props) => {
  let content = null;

  let creditCardsContent = props.profileCredits.map((element) => {
    return (
      <CreditCard
        key={element.id}
        id={element.id}
        mediaType={element.media_type}
        title={element.original_title}
        character={element.character}
        posterPath={element.poster_path}
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