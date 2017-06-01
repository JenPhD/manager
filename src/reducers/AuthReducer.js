import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };
export default (state, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};