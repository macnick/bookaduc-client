import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingList from './BookingList';

const UserPage = ({ user, bookings }) => (
  <div className="user container">
    Hello
    {` ${user}`}
    <div className="row">
      <div>
        <BookingList bookings={bookings} />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.book.name,
  bookings: state.book.bookings,
});

UserPage.propTypes = {
  user: PropTypes.string.isRequired,
  bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(UserPage);
