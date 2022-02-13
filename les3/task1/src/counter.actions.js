export const INCREMENT_COUNTER = 'COUNTER/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'COUNTER/DECREMENT_COUNTER';
export const RESET_COUNTER = 'COUNTER/RESET_COUNTER';

export const increment = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const reset = () => {
  return {
    type: RESET_COUNTER,
  };
};
