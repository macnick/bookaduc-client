import axios from 'axios';
import bikesList from './bikeActions';
import { loadUserBookings } from './bookingActions';
import parseJwt from '../helpers/parseJWT';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  BASE_URL,
  LOGIN_URL,
} from './actionTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
  loading: true,
});

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFail = error => ({
  type: LOGIN_FAIL,
  payload: error,
});

const login = user => dispatch => {
  dispatch(loginRequest());
  axios
    .post(`${BASE_URL}${LOGIN_URL}`, user)
    .then(response => {
      dispatch(loginSuccess(response.data));
      const token = response.data.auth_token;
      const userId = parseJwt(token).user_id;
      dispatch(bikesList(token));
      dispatch(loadUserBookings(token, userId));
    })
    .catch(() => {
      dispatch(loginFail('Invalid credentials, please try again or signup'));
    });
};

const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

export { login, logout };
