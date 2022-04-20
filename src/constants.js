export const LS_BOOKMARKS = "wtwBookmarks";

export const API_KEY = `${process.env.REACT_APP_API_KEY}`;

// Show by id api url
export const showByIdApiUrl = (id, mediaType) => {
  if (mediaType === "movie") {
    return `movie/${id}?api_key=${API_KEY}&language=en-US`;
  }
  return `tv/${id}?api_key=${API_KEY}&language=en-US `;
};
