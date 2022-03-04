export const FILTER_LIST = 'LIST/FILTER';

export const filterList = text => {
  return {
    type: FILTER_LIST,
    payload: {
      text,
    },
  };
};
