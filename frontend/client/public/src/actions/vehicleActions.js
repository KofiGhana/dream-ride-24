// src/actions/vehicleActions.js
import axios from 'axios';

export const getVehicles = () => async dispatch => {
  try {
    const response = await axios.get('/api/vehicles');
    dispatch({
      type: 'GET_VEHICLES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_VEHICLES_FAILURE',
      payload: error.response.data,
    });
  }
};
