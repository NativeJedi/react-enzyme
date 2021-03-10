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
          <form className="inline-form" style={{ maxWidth: '500px' }}>
            <div className="input-group mb-2">
              <input
                value={word}
                data-test="input-box"
                className="form-control"
                type="text"
                placeholder="Enter guess"
                onInput={({ target }) => setWord(target.value)}
              />

              <button
                data-test="submit-button"
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
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
