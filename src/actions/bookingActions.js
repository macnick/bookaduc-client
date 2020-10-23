/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { fetchData } from '../services/axios-api';
import {
  BOOK_URL,
  USER_URL,
  BOOK_APP_REQUEST,
  BOOK_APP_SUCCESS,
  BOOK_APP_FAIL,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAIL,
  DELETING_BOOKING,
  BOOKING_DELETED,
} from './actionTypes';

const bookRequest = () => ({
  type: BOOK_APP_REQUEST,
  loading: true,
});

const bookSuccess = data => ({
  type: BOOK_APP_SUCCESS,
  loading: false,
  payload: data,
});

const bookFail = error => ({
  type: BOOK_APP_FAIL,
  loading: false,
  payload: error,
});

const bookingsRequest = () => ({
  type: GET_BOOKINGS_REQUEST,
  loading: true,
});

const bookingsSuccess = data => ({
  type: GET_BOOKINGS_SUCCESS,
  loading: false,
  payload: data,
});

const bookingsFail = error => ({
  type: GET_BOOKINGS_FAIL,
  loading: false,
  payload: error,
});

const loadUserBookings = userId => dispatch => {
  dispatch(bookingsRequest);
  fetchData('get', `${USER_URL}${userId}`)
    .then(response => {
      dispatch(bookingsSuccess(response.data));
    })
    .catch(error => {
      dispatch(bookingsFail(error));
    });
};

const createBooking = data => dispatch => {
  dispatch(bookRequest());
  fetchData('post', `${BOOK_URL}`, data)
    .then(response => {
      dispatch(bookSuccess(response.data));
      dispatch(loadUserBookings(data.user_id));
    })
    .catch(error => {
      dispatch(bookFail(error.message));
    });
};

const updateBooking = data => dispatch => {
  dispatch({ type: 'UPDATE_REQUEST' });
  const { book_id } = data;
  delete data.book_id;
  fetchData('patch', `${BOOK_URL}/${book_id}`, data)
    .then(response => {
      if (response.data.status === 'patched') {
        dispatch({ type: 'BOOKING_UPDATE_SUCCESS' });
      }
      dispatch(loadUserBookings(data.user_id));
    })
    .catch(error => {
      dispatch(bookFail(error.message));
    });
};

const deleteBooking = (book_id, user_id) => dispatch => {
  dispatch({ type: DELETING_BOOKING });
  fetchData('delete', `${BOOK_URL}/${book_id}`)
    .then(response => {
      dispatch({ type: BOOKING_DELETED, payload: response.data });
      dispatch(loadUserBookings(user_id));
    })
    .catch(error => dispatch(bookFail(error.message)));
};

export {
  createBooking, loadUserBookings, deleteBooking, updateBooking,
};
