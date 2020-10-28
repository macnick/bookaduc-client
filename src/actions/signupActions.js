import { setAuthorizationToken, fetchData } from '../services/axios-api';
import bikesList from './bikeActions';
import { loadUserBookings } from './bookingActions';
import parseJwt from '../helpers/parseJWT';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_URL,
} from './actionTypes';

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
  loading: true,
});

const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const signupFail = (error) => ({
  type: SIGNUP_FAIL,
  payload: error,
});

const signup = (user) => (dispatch) => {
  dispatch(signupRequest());
  fetchData('post', `${SIGNUP_URL}`, user)
    .then((response) => {
      if (response.status === 201) {
        const token = response.data.auth_token;
        const userId = parseJwt(token).user_id;
        response.data.userId = userId;
        dispatch(signupSuccess(response.data));
        setAuthorizationToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('user', userId);
        dispatch(bikesList());
        dispatch(loadUserBookings(userId));
      }
    })
    .catch(() => {
      dispatch(
        signupFail('An account with this email already exists, please login')
      );
    });
};

export default signup;
