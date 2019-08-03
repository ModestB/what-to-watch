import React from 'react';

import classes from './Accordion.module.scss';
import Card from 'react-bootstrap/Card';

const Accordion = (props) => {
  let cards = null;

  cards = props.elements.map((element, index) => {
    return (
      <Card className={`${ classes.card } rounded-0`}>
        <Card.Header className={`${ classes.cardHeader } collapsed`}  id={`heading${index}`}   data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
          <h2 className="mb-0">
            <div className={`${classes.containerHeader} position-relative d-flex justify-content-center font-weight-bold`}>
              <p className="mb-0 px-2">{element.title}</p><span className=""></span>
            </div>     
          </h2>
        </Card.Header>
        <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordionExample">
          <Card.Body className="p-0">
            {element.body}        
          </Card.Body>
        </div>
      </Card>
    )
  });

  return (
    <div className={`${ classes.accordion } accordion`} id="accordionExample">
      {cards}
    </div>
  )
}

export default Accordion;