export const SET_FAV = "SET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const setFavMovie = (payload) => {
  return {
    type: SET_FAV,
    payload,
  };
};

export const removeFavMovie = (payload) => {
  return {
    type: REMOVE_FAV,
    payload,
  };
};
