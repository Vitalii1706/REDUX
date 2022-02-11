export const ADD = 'users/addUser';
export const DELETE = 'users/deleteUser';

export const addUser = user => {
  return {
    type: ADD,
    user,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
  };
};
