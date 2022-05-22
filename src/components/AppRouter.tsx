import React, { FC, Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './Header';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error';
import { Profile } from '../pages/Profile';
import { ChatList } from './ChatList';
import { AboutWithConnect } from '../pages/About';
import { Articles } from '../pages/Articles';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { auth } from '../services/firebase';
import { changeAuth } from '../store/profile/slice';


const Chats = React.lazy(() =>
  import('../pages/Chats').then((module) => ({
    default: module.Chats,
  })),
);

export const AppRouter: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user:',user);
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });
  }, []);
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
            <Route path="chats" element={<PrivateRoute />}>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="articles" element={<Articles />} />
            <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
