import {
  GET_BIKE_REQUEST,
  GET_BIKE_SUCCESS,
  GET_BIKE_FAIL,
} from '../actions/actionTypes';

const initState = {
  bikes: [],
};

const bikeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BIKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BIKE_SUCCESS:
      console.log('bike success:', action.payload);
      return {
        ...state,
        bikes: action.payload,
      };
    case GET_BIKE_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default bikeReducer;
