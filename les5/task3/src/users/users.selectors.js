import { createSelector } from 'reselect';

export const userListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filterListSelector = createSelector(
  [userListSelector, filterTextSelector],
  (users, filterText) =>
    users.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase())),
);
