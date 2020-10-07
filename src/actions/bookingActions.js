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

export const createBooking = (token, data) => (dispatch) => {
  console.log('booking...');
  dispatch(bookRequest());
  // axios
  //   .post(`${BASE_URL}${BOOK_URL}`, data, { headers: { Authorization: token } })
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));
};
