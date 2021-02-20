import { combineReducers } from 'redux';
import guessedWordsReducer from './guessed-words/guessed-words.reducer';
import secretWordReducer from './secret-word/secret-word.reducer';
import successReducer from './success/success.reducer';

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
});

export default rootReducer;
