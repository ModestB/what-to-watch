import {
  SET_SHOW_BY_ID,
} from '../../actionTypes/actionTypes';

import { getExtraShowInfo } from './extraShowInfoActions';

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setShowById = (searchResults, mediaType) => ({
  type:  SET_SHOW_BY_ID,
  payload: {
    searchResults,
    mediaType
  }
});

export function getShowById(showId, mediaType){
  let request = "";

  if( mediaType === 'movie'){
    request = `https://api.themoviedb.org/3/movie/${showId}?api_key=${API_KEY}&language=en-US`;
  } else {
    request = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US `
  }

  return function(dispatch) {
    fetch( request )
    .then( (response) => {
      return response.json();
    })
    .then( ( data ) => {
      dispatch(getExtraShowInfo(showId, mediaType));
      dispatch(setShowById([data], mediaType));
    })
  }
}