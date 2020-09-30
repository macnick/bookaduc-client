const initState = {
  name: 'macnick',
  bookings: [
    {
      id: 1,
      city: 'Athens',
      date: '2020-10-10',
      bike: {
        name: 'Panigale V4',
      },
    },
    {
      id: 2,
      city: 'Volos',
      date: '2020-10-11',
      bike: {
        name: 'Monster 1200S',
      },
    },
    {
      id: 3,
      city: 'Patra',
      date: '2020-10-12',
      bike: {
        name: 'SuperSport',
      },
    },
  ],
};

const bookingReducer = (state = initState, action) => {
  return state;
};

export default bookingReducer;
