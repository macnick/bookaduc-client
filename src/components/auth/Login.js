import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';

const Login = ({ login }) => {
  const history = useHistory();

  const state = {
    email: '',
    password: '',
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(state);
    history.push('/bikes');
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn red darken-3 z-depth-1">Login</button>
        </div>
        <p className="grey-text">
          Don't have an account?
          <Link to="/signup">{' Signup'}</Link>
        </p>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
