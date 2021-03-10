import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './components/congrats/congrats.component';
import GiveUp from './components/give-up/give-up.component';
import GuessedWords from './components/guessed-words/guessed-words.component';
import './App.css';
import InputSecretWord from './components/input-secret-word/input-secret-word.component';
import Input from './components/input/input.component';
import NewGame from './components/new-game/new-game.component';
import TotalGuesses from './components/total-guesses/total-guesses.component';
import { selectGuessedWords } from './store/guessed-words/guessed-words.selectors';
import { getSecretWord } from './store/secret-word/secret-word.actions';
import { selectSecretWord } from './store/secret-word/secret-word.selectors';
import { selectIsSuccess } from './store/success/success.selectors';

export const UnconnectedApp = ({ getSecretWord, success, guessedWords, secretWord }) => {
  const [isSecretDisplayed, setSecretDisplay] = useState(false);

  useEffect(() => {
    getSecretWord();
  }, []);

  const wordsCount = guessedWords.length;

  return (
    <div className="App container">
      <h1>Jotto</h1>

      { isSecretDisplayed && <div>The secret word is {secretWord}</div> }

      <div>
        <Input />
      </div>

      <Congrats isSuccess={success} />
      <GuessedWords guessedWords={guessedWords} />
      <TotalGuesses totalGuesses={wordsCount} />

      <div style={{ marginTop: '24px' }}>
        <InputSecretWord wordsCount={wordsCount} />

        <GiveUp
          wordsCount={wordsCount}
          setSecretDisplay={setSecretDisplay}
          success={success}
        />

        <NewGame
          isSecretDisplayed={isSecretDisplayed}
          setSecretDisplay={setSecretDisplay}
          success={success}
        />
      </div>
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
