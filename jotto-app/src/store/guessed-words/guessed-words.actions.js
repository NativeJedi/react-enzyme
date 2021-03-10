import { getLetterMatchCount } from '../../helpers';
import { correctGuess } from '../success/success.actions';
import { GUESS_WORD, SET_GUESSED_WORDS } from './guessed-words.types';

export const setGuessedWords = (words) => ({
  type: SET_GUESSED_WORDS,
  payload: words,
});

export const guessWord = (word) => {
  return (dispatch, getState) => {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(word, secretWord);

    dispatch({
      type: GUESS_WORD,
      payload: {
        word,
        letterMatchCount,
      },
    });

    if (word === secretWord) {
      dispatch(correctGuess());
    }
  };
};
