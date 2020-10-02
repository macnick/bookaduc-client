import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import store from '../../reducers/store';
// import LoggedOutLinks from '../layout/LoggedOutLinks';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state;
    console.log(this.state);
    store.dispatch(login(user));
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
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.teamsList.team,
// });

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
