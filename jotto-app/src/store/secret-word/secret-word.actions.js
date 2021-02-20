import axios from 'axios';
import { SET_SECRET_WORD } from './secret-word.types';

export const getSecretWord = () => async (dispatch) => {
  const { data } = await axios.get('https://random-words-api.vercel.app/word');

  console.log('data:', data);
  dispatch({
    type: SET_SECRET_WORD,
    payload: data?.[0]?.word,
  });
};
