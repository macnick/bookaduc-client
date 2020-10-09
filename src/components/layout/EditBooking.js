import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import { updateBooking } from '../../actions/bookingActions';

const EditBooking = ({
  token, updateBooking, bookings, bikes, user_id,
}) => {
  const { id } = useParams();
  const book = bookings.find(b => b.id === +id) || 1;
  const bike = bikes.find(b => b.id === book.bike.id);
  const history = useHistory();

  console.log('edit booking id: ', id, 'bike:', bike, 'userId:', user_id);

  const appointment = {
    city: 'Athens',
    bike_id: bike.id,
    user_id,
    book_id: id,
  };

  const handleChange = e => {
    appointment[e.target.id] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateBooking(token, appointment);
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
          <form onSubmit={handleSubmit} className="white book-form">
            <label htmlFor="city">Select a City</label>
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
              <button className="btn red darken-3 z-depth-1" type="submit">
                Update Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user_id: state.book.user_id,
  bookings: state.book.bookings,
  token: state.auth.token,
  bikes: state.bikes.bikes,
});

const mapDispatchToProps = dispatch => ({
  updateBooking: (token, appointment) => dispatch(updateBooking(token, appointment)),
});

EditBooking.propTypes = {
  token: PropTypes.string.isRequired,
  updateBooking: PropTypes.func.isRequired,
  bookings: PropTypes.arrayOf(objects).isRequired,
  bikes: PropTypes.arrayOf(objects).isRequired,
  user_id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBooking);
