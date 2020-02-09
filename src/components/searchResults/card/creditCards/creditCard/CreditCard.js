import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { getShowById } from '../../../../../store/actions/actions';

import classes from './CreditCard.module.scss';

import PosterImg from '../../posterImg/PosterImg';

const CreditCard = (props) => {
  return (
    <div className={`${classes.container}`} onClick={ () => props.getShowById(props.id, props.mediaType) }>
      <div className={`${classes.card}`}>
          <PosterImg posterPath={props.posterPath} posterImgSize={'md'}/>
          <div className={`${classes.body}`}>
            <p className={`${classes.title}`}>{props.title}</p>
            <p><b>Character:</b> {props.character}</p>
          </div>     
      </div>
    </div>
  )
}

const mapStateDispatch = dispatch => {
  return {
    getShowById: (showId, mediaType) => dispatch(getShowById(showId, mediaType)) 
  }
}

export default  connect(null, mapStateDispatch)(CreditCard);