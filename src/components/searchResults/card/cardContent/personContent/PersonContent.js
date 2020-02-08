import React from 'react';
import ReactAux from '../../../../../hoc/ReactAux/ReactAux';

import List from '../../list/List';

import classes from './PersonContent.module.scss';

const personContent = (props) => {
  let content = null;
  let name = null;
  let bodyContent = null;

  name = <div className={`${classes.title}`}> { props.personName } </div>

  if (props.profileKnownFor) {
    bodyContent =  
      <div>
        <p className={`${ classes.title }`}>Known for </p>
        <List 
          elements={props.profileKnownFor}
        />
      </div>
  }

  if (props.displaySinglePage) {
    bodyContent = 
      <div>
        <p className={`${ classes.title }`}>Known for </p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.known_for_department ? props.profileDetails.known_for_department : '-'}
        </p>
        <p className={`${ classes.title }`}>Birthday </p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.birthday ? props.profileDetails.birthday : '-'}
        </p>
        <p className={`${ classes.title }`}>Place Of Birth</p>
        <p className={`${ classes.text }`}>
          {props.profileDetails.place_of_birth ? props.profileDetails.place_of_birth : '-'}
        </p>
      </div>;
  }

  content = 
    <ReactAux>
      {name} 
      {bodyContent}
    </ReactAux>
  return (
    content
  )
}

export default personContent;