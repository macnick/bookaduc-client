import React from 'react';

const BookingDetails = ({ book }) => (
  <div className="card z-depth-2  ">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">
        Test ride a
        {book.bike.name}
      </span>
      <p>
        Location:
        {book.city}
      </p>
      <p className="grey-text">
        Date:
        {book.date}
      </p>
    </div>
  </div>
);

export default BookingDetails;
