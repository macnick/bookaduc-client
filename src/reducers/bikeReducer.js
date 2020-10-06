import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAIL,
  GET_BIKE_REQUEST,
  GET_BIKE_SUCCESS,
  GET_BIKE_FAIL,
} from '../actions/actionTypes';

const initState = {
  bikes: [],
};

const bikeReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BIKES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BIKES_SUCCESS:
      console.log('bike success:', action.payload);
      return {
        ...state,
        bikes: action.payload,
      };
    case FETCH_BIKES_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default bikeReducer;
