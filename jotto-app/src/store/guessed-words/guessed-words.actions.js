import { getLetterMatchCount } from '../../helpers';
import { correctGuess } from '../success/success.actions';
import { GUESS_WORD } from './guessed-words.types';

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
