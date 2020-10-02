import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  BASE_URL,
  LOGIN_URL,
} from '../actions/actionTypes';

const initState = {
  token: '',
  authStatus: false,
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      // case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.auth_token,
        authStatus: true,
        loading: false,
      };
    // case AUTH_ERROR:
    case LOGIN_FAIL:
      // case LOGOUT_SUCCESS:
      // case REGISTER_FAIL:
      return {
        ...state,
        authStatus: false,
        token: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
