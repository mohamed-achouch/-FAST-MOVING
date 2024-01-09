// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Slices/Slice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;