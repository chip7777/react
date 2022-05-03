import { configureStore } from '@reduxjs/toolkit';
import { chatReducer, ChatsState } from './chats/reducer';
import { profileReducer, ProfileState } from './profile/reducer';

export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

export const store = configureStore({
  reducer: {
    chats: chatReducer,
    profile: profileReducer,
  },
});
