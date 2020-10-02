import { GET_ERRORS, CLEAR_ERRORS } from '../actions/actionTypes';

const initState = {
  authStatus: false,
  msg: '',
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.message,
        authStatus: false,
      };
    case CLEAR_ERRORS:
      return {
        msg: '',
        authStatus: false,
      };
    default:
      return state;
  }
};

export default errorReducer;
