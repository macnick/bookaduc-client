import axios from 'axios';

import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAIL,
  BASE_URL,
  ALL_BIKES,
} from './actionTypes';

const bikesRequest = () => ({
  type: FETCH_BIKES_REQUEST,
  loading: true,
});

const bikesSuccess = (data) => ({
  type: FETCH_BIKES_SUCCESS,
  payload: data,
  loading: false,
});

const bikesFail = (error) => ({
  type: FETCH_BIKES_FAIL,
  payload: error,
});

const bikesList = (token) => (dispatch) => {
  dispatch(bikesRequest());
  axios
    .get(`${BASE_URL}${ALL_BIKES}`, {
      headers: { Authorization: token },
    })
    .then((response) => {
      dispatch(bikesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(bikesFail(error.message));
    });
};

export { bikesList };
