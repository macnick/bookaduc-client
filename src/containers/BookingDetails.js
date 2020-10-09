import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooking, loadUserBookings } from '../actions/bookingActions';

const BookingDetails = ({ book, deleteBooking, token, userId }) => {
  console.log('Booking Details:', book, userId);
  const handleDelete = (token, bookId, userId) => {
    deleteBooking(token, bookId, userId);
  };

  return (
    <div className="card-panel horizontal z-depth-2  ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Test ride a{' ' + book.bike.name}</span>
        <h6>
          Location:
          {' ' + book.city}
        </h6>
        <h6>
          Date:
          {' ' + book.date}
        </h6>
      </div>

      {/* <div> */}
      <button
        onClick={() => handleDelete(token, book.id, userId)}
        className="btn red darken-3 z-depth-2  user-btn"
      >
        Cancel Booking
      </button>
      {/* </div> */}
      <div>
        <Link
          to={{
            pathname: `/update/${book.id}`,
            state: { token, userId, bike: book.bike },
          }}
        >
          <button className="btn green darken-2 z-depth-2 user-btn">
            Update Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userId: state.book.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBooking: (token, id, user_id) =>
    dispatch(deleteBooking(token, id, user_id)),
  loadUserBookings: (token, id) => dispatch(loadUserBookings(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
