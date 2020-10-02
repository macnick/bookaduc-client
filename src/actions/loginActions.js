import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  BASE_URL,
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
  axios
    .post(`${BASE_URL}${LOGIN_URL}`, user)
    .then((response) => {
      console.log('response: ', response.data);
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(loginFail(error.message));
    });
};

export { login };
