import { storeFactory } from '../../test/utils';
import { correctGuess } from './success.actions';
import successReducer, { INITIAL_STATE } from './success.reducer';
import { selectIsSuccess } from './success.selectors';
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

    expect(newState).toEqual(true);
  });
});

describe('successSelector', () => {
  test('returns correct initial state', () => {
    const store = storeFactory({ success: INITIAL_STATE });
    const success = selectIsSuccess(store.getState());

    expect(success).toBe(INITIAL_STATE);
  });
})
