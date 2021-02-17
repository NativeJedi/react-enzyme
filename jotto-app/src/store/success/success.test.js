import { correctGuess } from './success.actions';
import successReducer, { INITIAL_STATE } from './success.reducer';
import { CORRECT_GUESS } from './success.types';

describe('correctGuess action', () => {
  test('returns object with type CORRECT_GUESS', () => {
    const action = correctGuess();

    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});

describe('successReducer', () => {
  test('returns default initial state', () => {
    const successState = successReducer(undefined, {});

    expect(successState).toEqual(INITIAL_STATE);
  });

  test('returns valid state after correctGuess action', () => {
    const newState = successReducer(undefined, correctGuess());

    expect(newState).toEqual({
      ...INITIAL_STATE,
      isSuccess: true,
    });
  });
});
