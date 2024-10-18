// src/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import vehicleReducer from './reducers/vehicleReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  vehicle: vehicleReducer,
});

const store = createStore(rootReducer);
