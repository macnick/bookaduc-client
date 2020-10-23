import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBooking } from '../../actions/bookingActions';
import parseJwt from '../../helpers/parseJWT';

const BikeDetails = ({ bikes, token, createBooking }) => {
  const { id } = useParams();
  const bike = bikes.find(b => b.id === +id) || 1;
  const history = useHistory();

  const appointment = {
    city: 'Athens',
    bike_id: id,
    user_id: parseJwt(token).user_id,
  };

  const handleChange = e => {
    appointment[e.target.id] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    createBooking(appointment);
    history.push('/user');
  };

  return (
    <div className="container section bike-details">
      <div className="card z-depth-2">
        <div className="card-image">
          <img src={bike.image} alt={bike.name} style={{ width: '100%' }} />
        </div>
        <div className="card-content grey-text text-darken-4">
          <span className="card-title">{bike.name}</span>
          <div className="card-action grey lighten-4 grey-text">
            <p className="grey-text">
              Displacement:
              {` ${bike.displacement}`}
            </p>
            <p className="grey-text">
              Power:
              {` ${bike.power}`}
            </p>
            <p className="grey-text">
              Torque:
              {` ${bike.torque}`}
            </p>
            <p className="grey-text">
              Weight:
              {` ${bike.weight}`}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="red book-form">
            <p>Select a City</p>
            <div className="input-field col s12">
              <select
                name="city"
                id="city"
                className="browser-default"
                onChange={handleChange}
              >
                <option value="Athens">Athens</option>
                <option value="Akkra">Akkra</option>
                <option value="Tashkent">Tashkent</option>
                <option value="Paris">Paris</option>
                <option value="Rome">Rome</option>
                <option value="London">London</option>
              </select>
            </div>

            <p htmlFor="date">
              Pick a date
              <div className="pick-date">
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleChange}
                  required
                />
              </div>
            </p>
            <div className="input-field">
              <button className="btn red darken-3 z-depth-1" type="submit">Book Ride</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  bikes: state.bikes.bikes,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  createBooking: appointment => dispatch(createBooking(appointment)),
});

BikeDetails.propTypes = {
  token: PropTypes.string.isRequired,
  bikes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  createBooking: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeDetails);
