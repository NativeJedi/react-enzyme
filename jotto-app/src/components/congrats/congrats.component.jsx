import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ isSuccess }) => {
  return (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message">{
        isSuccess
          ? 'Success!'
          : ''
      }</span>
    </div>
  );
};

Congrats.propTypes = {
  isSuccess: PropTypes.bool,
};

Congrats.defaultProps = {
  isSuccess: false,
};

export default Congrats;
