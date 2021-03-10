import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSecretWord } from '../../store/secret-word/secret-word.actions';

export const UnconnectedInputSecretWord = ({ wordsCount, setSecretWord }) => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSecretWord(word);
    setWord('');
    setInputVisible(false);
  }

  useEffect(() => {
    if (!wordsCount) {
      setInputVisible(false);
    }
  }, [wordsCount]);

  if (wordsCount) {
    return null;
  }

  return (
    <div data-test="component-input-secret-word">
      {
        isInputVisible ? (
          <form
            data-test="form-secret-input"
            onSubmit={handleSubmit}
          >
            <input
              data-test="secret-input"
              value={word}
              onInput={({ target }) => setWord(target.value)}
            />
          </form>
        ) : (
          <button
            type="button"
            data-test="button-show-secret-input"
            className="btn btn-primary mb-2"
            onClick={() => setInputVisible(true)}
          >
            Input secret word
          </button>
        )
      }
    </div>
  );
};

UnconnectedInputSecretWord.propTypes = {
  wordsCount: PropTypes.number.isRequired,
  setSecretWord: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSecretWord: (word) => dispatch(setSecretWord(word)),
});

const InputSecretWord = connect(null, mapDispatchToProps)(UnconnectedInputSecretWord);

export default InputSecretWord;
