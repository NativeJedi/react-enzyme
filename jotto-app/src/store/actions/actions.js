import { setGuessedWords } from '../guessed-words/guessed-words.actions';
import { getSecretWord } from '../secret-word/secret-word.actions';
import { setSuccess } from '../success/success.actions';

export const resetGame = () => async (dispatch) => {
  await Promise.all([
    dispatch(getSecretWord()),
    dispatch(setGuessedWords([])),
    dispatch(setSuccess(false)),
  ]);
};
