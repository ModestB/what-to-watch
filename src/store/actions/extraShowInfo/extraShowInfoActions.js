import { SET_EXTRA_SHOW_INFO } from "../../actionTypes/actionTypes";

// API
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const setExtraShowInfo = (reviewsData, trailersData) => ({
  type: SET_EXTRA_SHOW_INFO,
  payload: {
    reviewsData,
    trailersData,
  },
});

export function getExtraShowInfo(showId, mediaType) {
  let requestTrailers = "";
  let requestReviews = "";
  let trailersData = null;
  let reviewsData = null;

  if (mediaType === "movie") {
    requestTrailers = `https://api.themoviedb.org/3/movie/${showId}/videos?api_key=${API_KEY}&language=en-US`;
    requestReviews = `https://api.themoviedb.org/3/movie/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    requestTrailers = `https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${API_KEY}&language=en-US`;
    requestReviews = `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  }

  return function(dispatch) {
    return fetch(requestTrailers)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        trailersData = data.results.filter((element) => {
          return element.type === "Trailer" && element.site === "YouTube";
        });

        return fetch(requestReviews);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reviewsData = data;
        dispatch(setExtraShowInfo(reviewsData.results, trailersData));
      });
  };
}
