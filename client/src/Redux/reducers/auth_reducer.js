import { SET_AUTH_TOKEN, CLEAR_TOKEN } from '../actions/types';

const initialAuthState = {
  currentToken: null,
};

export default function (state = initialAuthState, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        currentToken: action.payload,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        currentToken: '',
      };
    default:
      return state;
  }
}
