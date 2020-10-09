import React from 'react';
import PropTypes from 'prop-types';
import BookingDetails from './BookingDetails';

const BookingList = ({ bookings }) => (
  <div className="booking-list section">
    {bookings
      && bookings.map(book => <BookingDetails book={book} key={book.id} />)}
  </div>
);

BookingList.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookingList;
