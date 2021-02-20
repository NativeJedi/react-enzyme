import { GUESS_WORD } from './guessed-words.types';

const INITIAL_STATE = [];

const guessedWordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GUESS_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default guessedWordsReducer;
