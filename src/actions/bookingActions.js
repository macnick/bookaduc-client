import axios from 'axios';
import {
  BASE_URL,
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
} from '../actions/actionTypes';

const bookRequest = () => ({
  type: BOOK_APP_REQUEST,
  loading: true,
});

const bookSuccess = (data) => ({
  type: BOOK_APP_SUCCESS,
  loading: false,
  payload: data,
});

const bookFail = (error) => ({
  type: BOOK_APP_FAIL,
  loading: false,
  payload: error,
});

const bookingsRequest = () => ({
  type: GET_BOOKINGS_REQUEST,
  loading: true,
});

const bookingsSuccess = (data) => ({
  type: GET_BOOKINGS_SUCCESS,
  loading: false,
  payload: data,
});

const bookingsFail = (error) => ({
  type: GET_BOOKINGS_FAIL,
  loading: false,
  payload: error,
});

const createBooking = (token, data) => (dispatch) => {
  dispatch(bookRequest());
  axios
    .post(`${BASE_URL}${BOOK_URL}`, data, { headers: { Authorization: token } })
    .then((response) => {
      dispatch(bookSuccess(response.data));
      dispatch(loadUserBookings(token, data.user_id));
    })
    .catch((error) => {
      dispatch(bookFail(error.message));
    });
};

const loadUserBookings = (token, userId) => (dispatch) => {
  dispatch(bookingsRequest);
  axios
    .get(`${BASE_URL}${USER_URL}${userId}`, {
      headers: { Authorization: token },
    })
    .then((response) => {
      dispatch(bookingsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(bookingsFail(error));
    });
};

const deleteBooking = (token, book_id, user_id) => (dispatch) => {
  dispatch({ type: DELETING_BOOKING });
  console.log('token', token, 'id', book_id, 'user_id:', user_id);
  axios
    .delete(`${BASE_URL}${BOOK_URL}/${book_id}`, {
      headers: { Authorization: token },
    })
    .then((response) => {
      dispatch({ type: BOOKING_DELETED });
      dispatch(loadUserBookings(token, user_id));
    })
    .catch((error) => console.log(error));
};

export { createBooking, loadUserBookings, deleteBooking };
