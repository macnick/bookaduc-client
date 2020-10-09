import React from 'react';
import BookingDetails from './BookingDetails';

const BookingList = ({ bookings }) => (
  <div className="booking-list section">
    {bookings &&
      bookings.map((book) => <BookingDetails book={book} key={book.id} />)}
  </div>
);

export default BookingList;
