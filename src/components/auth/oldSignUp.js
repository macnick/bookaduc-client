import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/signupActions';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
      msg: '',
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
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Sign Up</button>
          </div>
          <p className="grey-text">Already a user?</p>
          <Link to="/login">Login</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
