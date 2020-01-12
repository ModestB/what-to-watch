import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { getShowById } from '../../../../store/actions/actions';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import classes from './CreditCard.module.scss';

const CreditCard = (props) => {
  return (
    <Col xs='6' onClick={ () => props.getShowById(props.id, props.mediaType) }>
      <Card className={`${classes.creditCard} border-0 `}>
        <Card.Body className='px-2 pt-0'>
          {props.posterImg}
          <Card.Body className={`py-1 px-0`}>
            <p className={`${classes.title} font-weight-bold mb-0`}>{props.title}</p>
            <p className={`${classes.text} mb-0`}><b>Character:</b> {props.character}</p>
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}

const mapStateDispatch = dispatch => {
  return {
    getShowById: (showId, mediaType) => dispatch(getShowById(showId, mediaType)) 
  }
}

export default  connect(null, mapStateDispatch)(CreditCard);