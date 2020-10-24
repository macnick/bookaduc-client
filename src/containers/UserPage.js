import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingList from './BookingList';
import Spinner from '../components/layout/Spinner';

const UserPage = ({ user, bookings, loading }) => (
  <div className="user container">
    Hello
    {` ${user}`}
    <div className="row">
      <div>
        {loading && <Spinner />}
        <BookingList bookings={bookings} />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.book.name,
  bookings: state.book.bookings,
  loading: state.book.loading,
});

UserPage.propTypes = {
  user: PropTypes.string.isRequired,
  bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(UserPage);
