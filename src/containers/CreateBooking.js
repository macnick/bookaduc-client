import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBooking } from '../actions/bookingActions';

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      date: '',
      bike_id: '',
      user_id: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  /* eslint-disable react/destructuring-assignment */
  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
  }

  /* eslint-disable jsx-a11y/label-has-associated-control */
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
            <button className="btn pink lighten-1 z-depth-1" type="button">Book this</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
});

CreateBooking.propTypes = {
  createBooking: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CreateBooking);
