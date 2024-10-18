// src/utils/api.js
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getVehicles = () => axios.get('/vehicles');
export const getVehicle = (id) => axios.get(`/vehicles/${id}`);
export const login = (email, password) => axios.post('/auth/login', {
  email,
  password,
});
