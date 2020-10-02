import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/signupActions';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup(this.state);
    this.setState({
      name: '',
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
