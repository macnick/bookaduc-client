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

const login = (user) => (dispatch) => {
  dispatch(loginRequest());
  fetchData('post', `${LOGIN_URL}`, user)
    .then((response) => {
      const token = response.data.auth_token;
      const userId = parseJwt(token).user_id;
      response.data.userId = userId;
      dispatch(loginSuccess(response.data));
      setAuthorizationToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', userId);
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
  return {
    type: LOGOUT,
  };
};

const checkAuth = () => {
  return (dispatch) => {
    const auth_token = localStorage.getItem('token');
    const userId = localStorage.getItem('user');
    if (!auth_token) {
      dispatch(logout());
    } else {
      dispatch(loginSuccess({ auth_token, userId }));
      setAuthorizationToken(auth_token);
      dispatch(bikesList());
      dispatch(loadUserBookings(userId));
    }
  };
};

export { login, logout, checkAuth };
