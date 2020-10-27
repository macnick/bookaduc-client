import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/actionTypes';
import parseJwt from '../helpers/parseJWT';

const token = localStorage.getItem('token');
let userId = null;
let authStatus = false;

if (token) {
  authStatus = true;
  userId = parseJwt(token).user_id;
}

const initState = {
  token,
  authStatus,
  userId: userId,
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
        userId: parseJwt(action.payload.auth_token).user_id,
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
        userId: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
