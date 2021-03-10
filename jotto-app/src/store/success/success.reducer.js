import { act } from '@testing-library/react';
import { CORRECT_GUESS, SET_SUCCESS } from './success.types';

export const INITIAL_STATE = false;

const successReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;

    case SET_SUCCESS:
      return action.payload;

    default:
      return INITIAL_STATE;
  }
};

export default successReducer;
