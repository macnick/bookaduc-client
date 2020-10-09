import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import { loadUserBookings } from '../../actions/bookingActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Login</button>
          </div>
          <p className="grey-text">Don't have an account?</p>
          <Link to="/signup">Signup</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  loadUserBookings: (token, userId) =>
    dispatch(loadUserBookings(token, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
