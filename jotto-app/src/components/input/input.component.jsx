import React, { useState } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../store/guessed-words/guessed-words.actions';
import { selectIsSuccess } from '../../store/success/success.selectors';

export const UnconnectedInput = ({ success, guessWord }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!word) {
      return;
    }

    guessWord(word);
    setWord('');
  };

  return (
    <div data-test="component-input">
      {
        success ? null : (
          <form className="inline-form">
            <input
              value={word}
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter guess"
              onInput={({ target }) => setWord(target.value)}
            />

            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  success: selectIsSuccess(state),
});

const mapDispatchToProps = (dispatch) => ({
  guessWord: (word) => dispatch(guessWord(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
