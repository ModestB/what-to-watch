import React from 'react';

import Trailer from './trailer/Trailer';

import classes from './Trailers.module.scss'

const trailers = (props) => {
  let content = null;
  let trailers = <h6>No Trailers</h6>;

  if (props.displayTrailers) {
    if (props.trailersData.length > 0) {
      trailers = props.trailersData.map(element => {
        return (
          <Trailer
            key={element.id}
            youtubeKey={element.key}
            title={element.name}
          />
        )
      }) 
    } 

    content =  
      <div className={`${classes.trailers} customScroll`}>
        { trailers }
      </div>;
  }

  return (
    content
  )
} 

export default trailers;