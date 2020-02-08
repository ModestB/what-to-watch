import React from 'react';

import NoImage from '../../../../icons/js/NoImage';

import classes from './PosterImg.module.scss'

const posterImg = (props) => {
  let imgSrc = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  let content = <div className={`${ [classes.posterImg, classes.posterImgPlaceholder].join(' ')}`}><NoImage fill="#ffffff" width="50px" height="50px" /></div>;

  if(props.posterPath) {
    content = <img className={`${classes.posterImg}`} src={ imgSrc + props.posterPath } />;
  }

  return (
    content
  )
}

export default posterImg;