import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/reducer';

export const store = configureStore({
  reducer: profileReducer,
});
