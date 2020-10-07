import {
  BASE_URL,
  BOOK_URL,
  BOOK_APP_REQUEST,
  BOOK_APP_SUCCESS,
  BOOK_APP_FAIL,
} from '../actions/actionTypes';

const initState = {
  user_id: '',
  bookings: [],
};
const ADD_BOOKING = 'ADD_BOOKING';

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_APP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOK_APP_SUCCESS:
      console.log('booked!', action.bookingDetails);
      return {
        ...state,
        user_id: action.payload.user_id,
        bookings: [...state.bookings, { city: action.payload.city }],
      };
    default:
      return state;
  }
};

export default bookingReducer;
