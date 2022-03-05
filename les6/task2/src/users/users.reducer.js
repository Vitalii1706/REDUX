import { SHOW_SPINNER, USER_DATA_RECIEVED } from './users.actions';

const intialState = {
  isFetching: false,
  userData: null,
};

const usersReducer = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_DATA_RECIEVED: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
