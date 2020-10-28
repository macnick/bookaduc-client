import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/actionTypes';
// possibly not needed start
import parseJwt from '../helpers/parseJWT';

const token = localStorage.getItem('token');
let userId = null;
let authStatus = false;

if (token) {
  authStatus = true;
  userId = parseJwt(token).user_id;
}
// possibly not needed end
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
        userId: action.payload.userId,
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
