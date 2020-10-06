import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAIL,
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
