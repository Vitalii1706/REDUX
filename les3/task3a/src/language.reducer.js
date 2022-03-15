import { SET_LANGUAGE } from './language.actions';
const intialState = {
  language: 'en',
};

const languageReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        language: action.payload.lang,
      };
    }

    default:
      return state;
  }
};

export default languageReducer;
