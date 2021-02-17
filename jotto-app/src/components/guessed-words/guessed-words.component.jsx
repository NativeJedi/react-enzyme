import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  const guessedWordsRows = guessedWords.map(({ word, letterMatchCount }, index) => (
    <tr data-test="guessed-word" key={`${index}-${letterMatchCount}`}>
      <td>{word}</td>
      <td>{letterMatchCount}</td>
    </tr>
  ));

  return (
    <div data-test="component-guessed-words">{
      guessedWords.length ? (
        <table data-test="guessed-words" className="table table-sm">
          <thead className="thead-light">
          <tr>
            <th>Guess</th>
            <th>Matching letters</th>
          </tr>
          </thead>
          <tbody>
          { guessedWordsRows }
          </tbody>
        </table>
      ) : (
        <div data-test="guessed-instructions">Try to guess the word!</div>
      )
    }</div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
