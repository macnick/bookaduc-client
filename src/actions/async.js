import axios from 'axios';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  BASE_URL,
  ALL_BIKES,
  BIKE_INFO,
  GET_BIKE_SUCCESS,
} from './actionTypes';

const fetchRequest = () => ({
  type: FETCH_REQUEST,
  loading: true,
});

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchBikeSuccess = (data) => ({
  type: GET_BIKE_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

const fetchBikes = () => (dispatch) => {
  dispatch(fetchRequest());
  axios
    .get(`${BASE_URL}${ALL_BIKES}`)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

const fetchBikeInfo = (id) => (dispatch) => {
  dispatch(fetchRequest());
  axios
    .get(`${BASE_URL}${BIKE_INFO}${id}`)
    .then((response) => {
      dispatch(fetchBikeSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

export { fetchRequest, fetchSuccess, fetchFailure, fetchBikes, fetchBikeInfo };
