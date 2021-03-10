import React from 'react';
import PropTypes from 'prop-types';

const GiveUp = ({ wordsCount, success, setSecretDisplay }) => {
  if (!wordsCount || success) {
    return null;
  }

  return (
    <button
      data-test="give-up-button"
      className="btn btn-danger"
      onClick={() => setSecretDisplay(true)}
    >
      Give up
    </button>
  );
};

GiveUp.propTypes = {
  wordsCount: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  setSecretDisplay: PropTypes.func.isRequired,
};

export default GiveUp;
