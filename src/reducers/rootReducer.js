import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bikeReducer from './bikeReducer';
import bookingReducer from './bookingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookingReducer,
  bikes: bikeReducer,
  error: errorReducer,
});

export default rootReducer;
