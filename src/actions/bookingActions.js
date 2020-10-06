export const createBooking = data => (dispatch, getState) => {
  dispatch({
    type: 'ADD_BOOKING',
    bookingDetails: data,
  });
};
