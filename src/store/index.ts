import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatReducer, ChatsState } from './chats/reducer';
import { profileReducer, ProfileState } from './profile/reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  },
);
