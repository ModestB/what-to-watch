import React from 'react';

import ShowContent from  './showContent/ShowContent';
import PersonContent from './personContent/PersonContent';

import classes from './CardContent.module.scss';

const cardContent = (props) => {

  let content = 
    <div className={`${classes.container}`}>
      { props.cardType != 'person' ?
          <ShowContent 
            displaySinglePage={props.displaySinglePage}
            showTitle={props.showTitle}
            showOverview={props.showOverview}
            showMediaType={props.showMediaType}
            showDate={props.showDate}
          /> :
          <PersonContent
            displaySinglePage={props.displaySinglePage}
            personName={props.personName}
            profileDetails={props.profileDetails}
            profileKnownFor={props.profileKnownFor}
          />
      }

    </div> 
  return (
    content
  )
};

export default cardContent;