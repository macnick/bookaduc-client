import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookingList from './BookingList';

class UserPage extends Component {
  render() {
    const { bookings } = this.props;
    return (
      <div className="user container">
        <div className="row">
          <div>
            <BookingList bookings={bookings} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.name,
    bookings: state.book.bookings,
  };
};

export default connect(mapStateToProps, null)(UserPage);
