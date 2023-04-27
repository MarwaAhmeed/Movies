import { SET_MODE } from './../actions/theme';

const INITIAL_STATE = {
  theme: "dark",
};

export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_MODE:
      return {
        lang: action.payload,
      };
    default:
      return state;
  }
}