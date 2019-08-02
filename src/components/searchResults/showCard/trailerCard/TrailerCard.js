import React from "react";

import classes from "./TrailerCard.module.css";

const trailerCard = ( props ) => {
  return (
    <iframe width="340" height="184" className={classes.iframe} style={{marginRight: '11px'}} src={`https://www.youtube-nocookie.com/embed/${props.youtubeKey}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
};

export default trailerCard;