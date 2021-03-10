import PropTypes from 'prop-types';

export const GuessedWordsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    word: PropTypes.string.isRequired,
    letterMatchCount: PropTypes.number.isRequired,
  }),
);
