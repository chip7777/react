//import { configureStore } from '@reduxjs/toolkit';
import { createStore, compose , combineReducers } from 'redux';
import { chatReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(combineReducers({
  profile: profileReducer,
  chats: chatReducer
}), composeEnhancers());
/*
export const store = configureStore({
  reducer: profileReducer,
  chats: chatReducer
});
*/
