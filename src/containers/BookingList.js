import React from 'react';
import BookingDetails from './BookingDetails';

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list section">
      {bookings &&
        bookings.map((book) => {
          return <BookingDetails book={book} key={book.id} />;
        })}
    </div>
  );
};

export default BookingList;
