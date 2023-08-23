import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
