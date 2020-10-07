import axios from 'axios';
import { BASE_URL, BOOK_URL, BOOK_APP } from '../actions/actionTypes';

export const createBooking = (data) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_BOOKING',
    bookingDetails: data,
  });
};
