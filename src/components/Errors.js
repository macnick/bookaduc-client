import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ error }) => (
  <>
    <div className="error-message"> {error}</div>
  </>
);

Errors.propTypes = {
  errors: PropTypes.string,
};

export default Errors;
