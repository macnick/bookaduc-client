import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/actionTypes';

const token = localStorage.getItem('token');
let authStatus = false;

if (token) {
  authStatus = true;
}

const initState = {
  token,
  authStatus,
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.auth_token,
        authStatus: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      return {
        ...state,
        authStatus: false,
        token: '',
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
