import { SET_LANGUAGE } from './../actions/language';

const INITIAL_STATE = {
  lang: "EN",
};

export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        lang: action.payload,
      };
    default:
      return state;
  }
}