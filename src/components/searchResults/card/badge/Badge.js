import React from 'react';

import classes from './Badge.module.scss'

const badge = (props) => {
  let content = null;

  if(props.rating){
    let type = classes.badgeSuccess;

    if( props.rating > 4 && props.rating < 7){
      type = classes.badgeWarning;
    } else if ( props.rating <= 4 ) {
      type = classes.badgeDanger;
    }
    content = <span className={`${[classes.badge, type].join(' ')}`}> { props.rating } </span>;
  }

  return (
    content
  )
}

export default badge;