import {
  BOOK_APP_REQUEST,
  BOOK_APP_SUCCESS,
  BOOK_APP_FAIL,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
} from '../actions/actionTypes';

const initState = {
  user_id: '',
  bookings: [],
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_APP_REQUEST:
    case GET_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOK_APP_SUCCESS:
      console.log('booked!', action.payload);
      return {
        ...state,
        loading: false,
        user_id: action.payload.user.id,
        name: action.payload.user.name,
      };
    case GET_BOOKINGS_SUCCESS:
      console.log('Get aptmts:', action.payload);
      return {
        ...state,
        bookings: action.payload.bookings,
      };
    case BOOK_APP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
