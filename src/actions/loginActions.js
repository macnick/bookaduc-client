import { setAuthorizationToken, fetchData } from '../services/axios-api';
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

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

const logUser = (data) => ({
  type: 'LOG_USER',
  // payload: data,
});

const login = (user) => (dispatch) => {
  dispatch(loginRequest());
  fetchData('post', `${LOGIN_URL}`, user)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      const token = response.data.auth_token;
      const userId = parseJwt(token).user_id;
      setAuthorizationToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', userId);
      alert('setting the storage');
      dispatch(bikesList());
      dispatch(loadUserBookings(userId));
    })
    .catch(() => {
      dispatch(loginFail('Invalid credentials, please try again or signup'));
    });
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  alert('clear');
  return {
    type: LOGOUT,
  };
};

const logged = (userId) => (dispatch) => {
  // dispatch(logUser());
  dispatch(bikesList());
  dispatch(loadUserBookings(userId));
};

export { login, logout, logged };
