import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import signup from '../../actions/signupActions';
/* eslint-disable jsx-a11y/label-has-associated-control */
const SignUp = ({ signup }) => {
  const history = useHistory();
  const state = {
    name: '',
    email: '',
    password: '',
    msg: '',
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(state);
    history.push('/bikes');
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn red darken-3 z-depth-1" type="submit">Sign Up</button>
        </div>
        <p className="grey-text">
          Already a user?
          <Link to="/login">{' Login'}</Link>
        </p>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
