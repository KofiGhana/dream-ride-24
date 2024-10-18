// src/reducers/authReducer.js
const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
