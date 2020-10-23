import {fetchData} from '../services/axios-api';

import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAIL,
  ALL_BIKES,
} from './actionTypes';

const bikesRequest = () => ({
  type: FETCH_BIKES_REQUEST,
  loading: true,
});

const bikesSuccess = data => ({
  type: FETCH_BIKES_SUCCESS,
  payload: data,
  loading: false,
});

const bikesFail = error => ({
  type: FETCH_BIKES_FAIL,
  payload: error,
});

const bikesList = () => dispatch => {
  dispatch(bikesRequest());
  fetchData('get', `${ALL_BIKES}`)
    .then(response => {
      dispatch(bikesSuccess(response.data));
    })
    .catch(error => {
      dispatch(bikesFail(error.message));
    });
};

export default bikesList;
