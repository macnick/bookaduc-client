import axios from 'axios';
import {
  BASE_URL,
  BOOK_URL,
  BOOK_APP_REQUEST,
  BOOK_APP_SUCCESS,
  BOOK_APP_FAIL,
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

export const createBooking = (token, data) => (dispatch) => {
  dispatch(bookRequest());
  axios
    .post(`${BASE_URL}${BOOK_URL}`, data, { headers: { Authorization: token } })
    .then((response) => {
      dispatch(bookSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(bookFail(error.message));
    });
};
