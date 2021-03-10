import { CORRECT_GUESS, SET_SUCCESS } from './success.types';

export const correctGuess = () => ({
  type: CORRECT_GUESS,
});

export const setSuccess = (isSuccess) => ({
  type: SET_SUCCESS,
  payload: isSuccess,
});
