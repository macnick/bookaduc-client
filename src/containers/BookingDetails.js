import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking, loadUserBookings } from '../actions/bookingActions';

const BookingDetails = ({ book, deleteBooking, token, userId }) => {
  const handleDelete = (token, bookId, userId) => {
    console.log('deleteing...', token, bookId, 'useid:', userId);
    deleteBooking(token, bookId, userId);
  };

  return (
    <div className="card z-depth-2  ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          Test ride a {book.bike.name} {book.id}
        </span>
        <p>Location: {book.city}</p>
        <p className="grey-text">Date: {book.date}</p>
      </div>
      <div>
        <button onClick={() => handleDelete(token, book.id, userId)}>
          Cancel Booking {book.id}
        </button>
      </div>
      <div>
        <button>Update Booking</button>
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
