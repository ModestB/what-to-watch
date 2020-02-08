import React from 'react';

import Accordion from '../../../../containers/accordion/Accordion';
import classes from './CardFooter.module.scss';

const cardFooter = (props) => {
  let content = null;

  if (props.displaySinglePage) {
    content  = 
      <footer className={`${classes.footer}`}>
        <Accordion 
          elements = {props.elements}
        />
      </footer>
  }
  return (
    content
  )
}

export default cardFooter;