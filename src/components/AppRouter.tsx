import React, { FC, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error';
import { Profile } from '../pages/Profile';
import { ChatList } from './ChatList';
import { AboutWithConnect } from '../pages/About';

const Chats = React.lazy(() =>
  import('../pages/Chats').then((module) => ({
    default: module.Chats,
  })),
);

export const AppRouter: FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="about" element={<AboutWithConnect />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
