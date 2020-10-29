import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
// do not need controlled inputs any more

import { login } from '../../actions/loginActions';
import Errors from '../Errors';
import Spinner from '../layout/Spinner';
/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = ({ login, error, loading }) => {
  const state = {
    email: '',
    password: '',
  };

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = data => {
    login(data);
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="white">
        {loading && <Spinner />}
        {error && <Errors error={error} />}
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} ref={register({required: true})} />
          {errors.email && <Errors error="You have to fill you email"/>}
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            ref={register({
              minLength: {
              value: 3,
              message: "Password must be at leat 3 characters"
            }
          })}
          />
          {errors.password && <Errors error={errors.password.message}/>}
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
/* eslint-disable react/require-default-props */
const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
