import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookingReducer,
});

export default rootReducer;
