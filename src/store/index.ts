import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';
import {  persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'gb_1889',
  storage,
  blacklist: ['profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  },
);

export const persistor =  persistStore(store);