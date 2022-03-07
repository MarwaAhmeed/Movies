import { SET_FAV, REMOVE_FAV } from "./../actions/Fav";

const INITIAL_STATE = {
  addFavorites: [],
};

export default function fav(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FAV:
      return {
        ...state,
        addFavorites: [...state.addFavorites,action.payload],
      };
    case REMOVE_FAV:
      return {
        addFavorites:state.addFavorites.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
    
  }
}