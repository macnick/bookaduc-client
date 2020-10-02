import {
  GET_BIKE_REQUEST,
  GET_BIKE_SUCCESS,
  GET_BIKE_FAIL,
  BASE_URL,
  ALL_BIKES,
} from '../actions/actionTypes';

const initState = {
  bikes: [
    // {
    //   id: 1,
    //   name: 'Monster 1200S',
    //   displacement: '1198 cc',
    //   power: '145 hp',
    //   torque: '124 Nm',
    //   weight: '185 Kg',
    // },
    // {
    //   id: 2,
    //   name: 'Panigale V2',
    //   displacement: '955 cc',
    //   power: '155 hp',
    //   torque: '104 Nm',
    //   weight: '176 Kg',
    // },
    // {
    //   id: 3,
    //   name: 'SuperSport',
    //   displacement: '937 cc',
    //   power: '110 hp',
    //   torque: '93 Nm',
    //   weight: '184 Kg',
    // },
  ],
};

const bikeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BIKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BIKE_SUCCESS:
      return {
        ...state,
        bikes: action.payload.bikes,
      };
    case GET_BIKE_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default bikeReducer;
