import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetGame } from '../../store/actions/actions';

export const UnconnectedNewGame = ({
  success,
  resetGame,
  isSecretDisplayed,
  setSecretDisplay,
}) => {
  if (!success && !isSecretDisplayed) {
    return null;
  }

  const handleClick = () => {
    resetGame();
    setSecretDisplay(false);
  }

  return (
    <button
      style={{ marginLeft: '20px' }}
      data-test="new-game-btn"
      className="btn btn-outline-secondary"
      onClick={handleClick}
    >
      New game
    </button>
  )
};

UnconnectedNewGame.propTypes = {
  resetGame: PropTypes.func.isRequired,
  isSecretDisplayed: PropTypes.bool.isRequired,
  setSecretDisplay: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

const NewGame = connect(
  null,
  (dispatch) => ({
    resetGame: () => dispatch(resetGame()),
  }),
)(UnconnectedNewGame);

export default NewGame;
