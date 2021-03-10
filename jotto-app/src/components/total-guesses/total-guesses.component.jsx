import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = ({ totalGuesses }) => {
  return (
    <div data-test="component-total-guesses">
      Total guesses: <span data-test="total-count">{totalGuesses}</span>
    </div>
  );
};

TotalGuesses.propTypes = {
  totalGuesses: PropTypes.number.isRequired,
};

export default TotalGuesses;
