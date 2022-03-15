import { ADD_USER, REMOVE_USER } from './user.actions';

const intialState = {
  user: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload.userData,
      };

    case REMOVE_USER: {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};
export default userReducer;
