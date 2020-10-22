import axios from 'axios';
import bikesList from './bikeActions';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  BASE_URL,
  SIGNUP_URL,
} from './actionTypes';

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
  loading: true,
});

const signupSuccess = data => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const signupFail = error => ({
  type: SIGNUP_FAIL,
  payload: error,
});

const signup = user => dispatch => {
  dispatch(signupRequest());
  axios
    .post(`${BASE_URL}${SIGNUP_URL}`, user)
    .then(response => {
      if (response.status === 201) {
        dispatch(signupSuccess(response.data));
        const token = response.data.auth_token;
        dispatch(bikesList(token));
      }
    })
    .catch(() => {
      dispatch(signupFail('An account with this email already exists, please login'));
    });
};

export default signup;
