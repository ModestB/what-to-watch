import {
  SET_SHOWS_BY_GENRE,
} from '../../actionTypes/actionTypes';

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setShowsByGenre = (searchResults) => ({
  type:  SET_SHOWS_BY_GENRE,
  payload: {
    searchResults
  }
});

export function getShowsByGenre(genreIds, singlePageType){
  return function(dispatch) {
    let request = null;

    if(singlePageType === 'movie') {
      request =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreIds.join('%2C%20')}`
    } else {
      request = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genreIds.join('%2C%20')}&include_null_first_air_dates=false`;
    }
  
    return fetch(request)
      .then( (response) => {
        return response.json();
      })
      .then( ( data ) => {
        dispatch(setShowsByGenre(data.results))
      })
  }
}