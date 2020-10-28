import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import signup from '../../actions/signupActions';
import Errors from '../Errors';
import Spinner from '../layout/Spinner';
/* eslint-disable jsx-a11y/label-has-associated-control */
const SignUp = ({ signup, error, loading }) => {
  const state = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(state);
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        {loading && <Spinner />}
        {error && <Errors error={error} />}
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn red darken-3 z-depth-1" type="submit">
            Sign Up
          </button>
        </div>
        <p className="grey-text">
          Already a user?
          <Link to="/login">{' Login'}</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});
/* eslint-disable react/require-default-props */
SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
