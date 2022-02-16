import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(options => selectedIds.includes(options.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(options => !selectedIds.includes(options.id));
  },
);
