import React from 'react';

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
            className={`${ classes.ListGroupItem } d-flex pt-0 pb-1 pl-0 pr-1`}
            key={element.id}
          > 
            <Badge 
              className={`${ classes.Badge } d-flex align-items-center justify-content-center mb-1 mr-1`} 
              variant="success"
            > 
              {element.release_date} 
            </Badge>
            <span 
              className={`${ classes.ShowName } text-left`} 
              onClick={() => props.showSingleShow(element.id, element.media_type)}
            > 
              {element.title} 
            </span>
          </ListGroup.Item>
        break;
      case "tv":
        item =
          <ListGroup.Item 
            className={`${ classes.ListGroupItem } d-flex pt-0 pb-1 pl-0 pr-1`}
            key={element.id}
          > 
            <Badge 
              className={`${ classes.Badge } d-flex align-items-center justify-content-center mb-1 mr-1`} 
              variant="success"
            > 
              {element.first_air_date} 
            </Badge>
            <span 
              className={`${ classes.ShowName } text-left`} 
              onClick={() => props.showSingleShow(element.id, element.media_type)}
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
    <ListGroup className={`${classes.ListGroup} customScroll mt-2`}>
      {knownForList}
    </ListGroup>
  )
}

export default List;