import React from 'react';
import { connect } from 'react-redux';
import { selectIsSuccess } from '../../store/success/success.selectors';

const Input = ({ isSuccess }) => {

  return (
    <div data-test="component-input">
      {
        isSuccess ? null : (
          <form className="inline-form">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter guess"
            />

            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
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
  isSuccess: selectIsSuccess(state),
});

export default connect(mapStateToProps)(Input);
