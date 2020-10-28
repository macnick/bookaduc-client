import {
  BOOK_APP_REQUEST,
  BOOK_APP_SUCCESS,
  BOOK_APP_FAIL,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  DELETING_BOOKING,
  BOOKING_DELETED,
} from '../actions/actionTypes';

const userId = localStorage.getItem('user');

const initState = {
  user_id: userId,
  bookings: [],
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_APP_REQUEST:
    case GET_BOOKINGS_REQUEST:
    case DELETING_BOOKING:
      return {
        ...state,
        loading: true,
      };
    case BOOK_APP_SUCCESS:
      return {
        ...state,
        loading: false,
        user_id: action.payload.user.id,
        name: action.payload.user.name,
      };
    case GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload.bookings,
        name: action.payload.name,
        user_id: action.payload.id,
      };
    case BOOK_APP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case BOOKING_DELETED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default bookingReducer;
