import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bikeReducer from './bikeReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookingReducer,
  bikes: bikeReducer,
});

export default rootReducer;
