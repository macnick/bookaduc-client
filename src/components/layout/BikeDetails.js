import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { createBooking } from '../../actions/bookingActions';

const BikeDetails = ({ bikes, token, createBooking }) => {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === +id) || 1;
  const history = useHistory();

  const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  };

  const appointment = {
    city: 'Athens',
    bike_id: id,
    user_id: parseJwt(token).user_id,
  };

  const handleChange = (e) => {
    appointment[e.target.id] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBooking(token, appointment);
    history.push('/user');
  };

  return (
    <div className="container section bike-details">
      <div className="card z-depth-2">
        <div className="card-content grey-text text-darken-4">
          <span className="card-title">Ducati {bike.name}</span>
          <div className="card-action grey lighten-4 grey-text">
            <p>Details {bike.id}</p>
            <p className="grey-text">
              Displacement:
              {bike.displacement}
            </p>
            <p className="grey-text">
              Power:
              {bike.power}
            </p>
            <p className="grey-text">
              Torque:
              {bike.torque}
            </p>
            <p className="grey-text">
              Weight:
              {bike.weight}
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Book a Ride</h5>
          <label htmlFor="city">Select a City</label>
          <div className="input-field col s12">
            <select
              name="city"
              id="city"
              className="browser-default"
              onChange={handleChange}
            >
              <option value="DEFAULT">Athens</option>
              <option value="Akkra">Akkra</option>
              <option value="Tashkent">Tashkent</option>
              <option value="Paris">Paris</option>
              <option value="Rome">Rome</option>
              <option value="London">London</option>
            </select>
          </div>

          <label htmlFor="date">
            Pick a date
            <div className="pick-date">
              <input
                type="date"
                name="date"
                id="date"
                onChange={handleChange}
              />
            </div>
          </label>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Book Ride</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bikes: state.bikes.bikes,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  createBooking: (token, appointment) =>
    dispatch(createBooking(token, appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BikeDetails);
