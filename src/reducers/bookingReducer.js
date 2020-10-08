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
      return {
        ...state,
        loading: true,
      };
    case BOOK_APP_SUCCESS:
      console.log('booked!', action.payload);
      return {
        ...state,
        user_id: action.payload.user.id,
        bookings: [
          ...state.bookings,
          {
            city: action.payload.city,
            date: action.payload.date,
          },
        ],
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
