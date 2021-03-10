import axios from 'axios';
import { SET_SECRET_WORD } from './secret-word.types';

export const setSecretWord = (word) => ({
  type: SET_SECRET_WORD,
  payload: word,
});

export const getSecretWord = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://random-words-api.vercel.app/word');

    dispatch({
      type: SET_SECRET_WORD,
      payload: data?.[0]?.word,
    });
  } catch (e) {
    dispatch(setSecretWord('party'));
  }
};
