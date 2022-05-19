import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatReducer } from './chats/slice';
import { profileReducer } from './profile/slice';
import {  persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, FLUSH } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { REGISTER } from 'redux-persist/lib/constants';

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
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});

export const persistor =  persistStore(store);