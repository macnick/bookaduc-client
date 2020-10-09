import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBooking, loadUserBookings } from '../actions/bookingActions';

const BookingDetails = ({
  book, deleteBooking, token, userId,
}) => {
  const handleDelete = (token, bookId, userId) => {
    deleteBooking(token, bookId, userId);
  };

  return (
    <div className="card-panel horizontal z-depth-2  ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          Test ride a
          {` ${book.bike.name}`}
        </span>
        <h6>
          Location:
          {` ${book.city}`}
        </h6>
        <h6>
          Date:
          {` ${book.date}`}
        </h6>
      </div>

      <div>
        <button
          type="submit"
          onClick={() => handleDelete(token, book.id, userId)}
          className="btn red darken-3 z-depth-2  user-btn"
        >
          Cancel Booking
        </button>
      </div>
      <div>
        <Link
          to={{
            pathname: `/update/${book.id}`,
            state: { token, userId, bike: book.bike },
          }}
        >
          <button className="btn green darken-2 z-depth-2 user-btn" type="submit">
            Update Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  userId: state.book.user_id,
});

const mapDispatchToProps = dispatch => ({
  deleteBooking: (token, id, userId) => dispatch(deleteBooking(token, id, userId)),
  loadUserBookings: (token, id) => dispatch(loadUserBookings(token, id)),
});

BookingDetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    bike: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
