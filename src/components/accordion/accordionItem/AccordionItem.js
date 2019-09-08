import React from 'react';

import classes from './AccordionItem.module.scss';
import Card from 'react-bootstrap/Card';
import CloseIcon from '../../../icons/js/Close';

const AccordionItem = (props) => {
  return (
    <Card 
    className={`${ classes.card } rounded-0 flex-grow-1`}  
    >
      <Card.Header 
        className={`${classes.cardHeader} ${props.show? classes.active : ''}`}
        onClick={() => props.clickHandler(props.index, props.title)}
      >
        <h2 className="mb-0">
          <div className={`${classes.containerHeader} position-relative d-flex justify-content-center font-weight-bold`}>
            <p className="mb-0 px-2">{props.title}</p>
          </div>     
        </h2>
        <div className={`${ classes.cardHeaderBg }`}></div>
      </Card.Header>

      <Card.Body 
        className={`containerBody ${props.index === 0 ? 'containerBody--left' : 'containerBody--right'} p-0 ${props.show ? 'active' : ''} d-flex flex-column`}
      >
        <CloseIcon 
          className={`${classes.closeIcon}`}
          onClick={() => props.clickHandler(props.index, props.title)}
          width="20px" 
          height="20px"
        />
        <div>
          {props.body}     
        </div>
          
      </Card.Body>

    </Card>
  )
 
};

export default AccordionItem;