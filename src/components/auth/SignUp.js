import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
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

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = data => {
    signup(data);
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="white">
        {loading && <Spinner />}
        {error && <Errors error={error} />}
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} ref={register({required: true, minLength: 3})} />
          {errors.name && errors.name.type === "required" && <Errors error="You have to fill you name"/>}
          {errors.name && <Errors error="Name must be at least 3 characters long"/>}
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          {errors.email && errors.email.type == "required" && <Errors error="You have to fill your email"/>}
          {errors.email && errors.email.type == "pattern" && <Errors error="You have to fill a valid email"/>}
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            ref={register({required: true, minLength: 4})}
          />
          {errors.password && errors.password.type == "required" && <Errors error="You have to type a password"/>}
          {errors.password && errors.password.type == "minLength" && <Errors error="Password must be at least 4 characters long"/>}
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
