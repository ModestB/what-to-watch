import React from 'react';

import Card from 'react-bootstrap/Card';
import CloseIcon from '../../../icons/js/Close';

import classes from './AccordionItem.module.scss';

const AccordionItem = (props) => {
  return (
    <Card 
      className={`${classes.item}  rounded-0 flex-grow-1`} 
    >
      <Card.Header 
        className={`${classes.header} ${props.show? 'active' : ''}`}
        onClick={() => props.clickHandler(props.index, props.title)}
      >
        <h2 className="mb-0">
          <div className="position-relative d-flex justify-content-center font-weight-bold">
            <p className="mb-0 px-2">{props.title}</p>
          </div>     
        </h2>
        <div className={`${classes.headerOverlay}`}></div>
      </Card.Header>

      <Card.Body 
        className={`${classes.body}  ${props.index === 0 ? classes.bodyLeft : classes.bodyRight} p-0 ${props.show ? classes.active : ''} d-flex flex-column`}
      >
        <CloseIcon 
          className={`${classes.close} icon-close icon-close--dark`}
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