import React from 'react';
import { connect } from 'react-redux';

// Action Types
import { getShowById } from '../../../../store/actions/actions';

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import classes from './List.module.scss';

const List = (props) => {
  let knownForList = props.elements.map((element) => {
    let item = null;
    switch (element.media_type ) {
      case "movie":
        item = 
          <ListGroup.Item 
            className={`${classes.item} d-flex pt-0 pb-1 pl-0 pr-1`}
            key={element.id}
          > 
            <Badge 
              className={`${classes.badge} d-flex align-items-center justify-content-center mb-1 mr-1`} 
              variant="success"
            > 
              {element.release_date} 
            </Badge>
            <span 
              className={`${classes.title} text-left`} 
              onClick={() => props.getShowById(element.id, element.media_type)}
            > 
              {element.title} 
            </span>
          </ListGroup.Item>
        break;
      case "tv":
        item =
          <ListGroup.Item 
            className={`${classes.item} d-flex pt-0 pb-1 pl-0 pr-1`}
            key={element.id}
          > 
            <Badge 
              className={`${classes.badge} d-flex align-items-center justify-content-center mb-1 mr-1`} 
              variant="success"
            > 
              {element.first_air_date} 
            </Badge>
            <span 
              className={`${classes.title} text-left`} 
              onClick={() => props.getShowById(element.id, element.media_type)}
            > 
            {element.name} 
            </span>         
          </ListGroup.Item>
        break;
      default:
        item  = null;
    }
    return item;
  })
  return(
    <ListGroup className={`${classes.container} customScroll mt-2`}>
      {knownForList}
    </ListGroup>
  )
}

const mapStateDispatch = dispatch => {
  return {
    getShowById: (showId, mediaType) => dispatch(getShowById(showId, mediaType)) 
  }
}

export default connect(null, mapStateDispatch)(List);