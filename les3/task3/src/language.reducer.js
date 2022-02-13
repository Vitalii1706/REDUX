import { SET_LANGUAGE } from './language.actions';

export const lenduageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
};
