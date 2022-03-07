const INITIAL_STATE = {
    movieList: [],
    movieDetails: {},
  };
  
  export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_MOVIE_LIST":
        return {
          ...state,
          movieList: action.payload,
        };
      case "GET_MOVIE_DETAILS":
        return {
          ...state,
          movieDetails: action.payload,
        };
        case "GET_MOVIE_SEARCH":
        return {
          ...state,
          movieList: action.payload,
        };
      default:
        return state;
    }
  }
  