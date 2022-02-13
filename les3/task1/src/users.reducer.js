import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const intialState = {
  usersList: [],
};

const usersReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };

    case DELETE_USER:
      const newList = state.usersList.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        usersList: newList,
      };

    case UPDATE_USER:
      const newList2 = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: newList2,
      };

    default:
      return state;
  }
};
export default usersReducer;