import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBooking } from '../actions/bookingActions';

class CreateBooking extends Component {
  state = {
    city: '',
    date: '',
    bike_id: '',
    user_id: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBooking(this.state);
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
          <h5 className="grey-text text-darken-3">Select City and Date</h5>
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input type="text" id="city" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Book this</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
  };
};

export default connect(null, mapDispatchToProps)(CreateBooking);