import {
  SET_EXTRA_PROFILE_INFO,
} from '../../actionTypes/actionTypes';

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setExtraProfileInfo = (profileDetails, profileCredits) => ({
  type:  SET_EXTRA_PROFILE_INFO,
  payload: {
    profileDetails,
    profileCredits
  }
});

export function getExtraProfileInfo(profileId){
  let detailsRequest = `https://api.themoviedb.org/3/person/${profileId}?api_key=${API_KEY}&language=en-US`;
  let combinedCreditsRequest = `
  https://api.themoviedb.org/3/person/${profileId}/combined_credits?api_key=${API_KEY}&language=en-US`
  let profileDetails = null;
  let profileCredits = null;

  return function(dispatch){
    fetch( detailsRequest )
      .then( (response) => {
        return response.json();
      })
      .then( ( data ) => {
        // SECOND FETCH
        profileDetails = data;
        return  fetch( combinedCreditsRequest );
      })
      .then( (response) => {
        return response.json()
      })
      .then( ( data ) => {
        profileCredits = data.cast;
        dispatch(setExtraProfileInfo(profileDetails, profileCredits));
      })
  }
}