import { combineReducers } from "redux";
import fav from "./Fav";
import movies from "./movies";
import language from "./language";
export default combineReducers({
  fav,
  movies,
  language,
});