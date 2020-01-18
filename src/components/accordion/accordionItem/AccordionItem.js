import React from 'react';

import Card from 'react-bootstrap/Card';
import CloseIcon from '../../../icons/js/Close';

const AccordionItem = (props) => {
  return (
    <Card 
      className="accordion-item  rounded-0 flex-grow-1" 
    >
      <Card.Header 
        className={`accordion-item__header ${props.show? 'active' : ''}`}
        onClick={() => props.clickHandler(props.index, props.title)}
      >
        <h2 className="mb-0">
          <div className="position-relative d-flex justify-content-center font-weight-bold">
            <p className="mb-0 px-2">{props.title}</p>
          </div>     
        </h2>
        <div className="accordion-item__header-overlay"></div>
      </Card.Header>

      <Card.Body 
        className={`accordion-item__body  ${props.index === 0 ? 'accordion-item__body--left' : 'accordion-item__body--right'} p-0 ${props.show ? 'active' : ''} d-flex flex-column`}
      >
        <CloseIcon 
          className="icon-close icon-close--dark"
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