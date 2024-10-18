// src/reducers/vehicleReducer.js
const initialState = {
  vehicles: [],
  vehicle: {},
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VEHICLES_SUCCESS':
      return { ...state, vehicles: action.payload };
    case 'GET_VEHICLE_SUCCESS':
      return { ...state, vehicle: action.payload };
    default:
      return state;
  }
};
