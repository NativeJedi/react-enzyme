import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ isSuccess }) => {
  if (!isSuccess) {
    return null;
  }

  return (
    <div data-test="component-congrats" className="alert alert-success">Success</div>
  );
};

Congrats.propTypes = {
  isSuccess: PropTypes.bool,
};

Congrats.defaultProps = {
  isSuccess: false,
};

export default Congrats;
