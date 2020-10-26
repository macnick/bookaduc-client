import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/loginActions';
import Errors from '../Errors';
import Spinner from '../layout/Spinner';
/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = ({ login, error, loading }) => {
  const state = {
    email: '',
    password: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };

  const handleChange = (e) => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        {loading && <Spinner />}
        {error && <Errors error={error} />}
        <h5 className="grey-text text-darken-3">Log In</h5>
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
            Login
          </button>
        </div>
        <p className="grey-text">
          Create an account
          <Link to="/signup">{' Signup'}</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
