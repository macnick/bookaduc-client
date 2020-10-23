import axios, { setAuthorizationToken } from '../services/axios-api';
import bikesList from './bikeActions';
import { loadUserBookings } from './bookingActions';
import parseJwt from '../helpers/parseJWT';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
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
    .post(`${LOGIN_URL}`, user)
    .then(response => {
      dispatch(loginSuccess(response.data));
      const token = response.data.auth_token; // to be eliminated
      setAuthorizationToken(token);
      const userId = parseJwt(token).user_id;
      dispatch(bikesList());
      dispatch(loadUserBookings(userId));
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
