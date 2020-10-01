export const createBooking = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_BOOKING',
      bookingDetails: data,
    });
  };
};
