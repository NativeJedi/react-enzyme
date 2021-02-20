import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './components/congrats/congrats.component';
import GuessedWords from './components/guessed-words/guessed-words.component';
import './App.css';
import Input from './components/input/input.component';
import { selectGuessedWords } from './store/guessed-words/guessed-words.selectors';
import { getSecretWord } from './store/secret-word/secret-word.actions';
import { selectSecretWord } from './store/secret-word/secret-word.selectors';
import { selectIsSuccess } from './store/success/success.selectors';

export const UnconnectedApp = ({ getSecretWord, success, guessedWords }) => {
  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="App container">
      <h1>Jotto</h1>
      <Input />
      <Congrats isSuccess={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

UnconnectedApp.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    letterMatchCount: PropTypes.number.isRequired,
  })).isRequired,
  getSecretWord: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  success: selectIsSuccess(store),
  secretWord: selectSecretWord(store),
  guessedWords: selectGuessedWords(store),
});

const mapDispatchToProps = (dispatch) => ({
  getSecretWord: () => dispatch(getSecretWord()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
