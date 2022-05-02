import React, { FC, useState, useMemo, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Header } from './components/Header';

const Chats = React.lazy(() =>
  import('./pages/Chats').then((module) => ({
    default: module.Chats,
  })),
);
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AUTHOR } from './constants';

import './App.css';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  
  /*const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length],
  );*/

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chats">
                  <Route
                    index
                    element={
                      <ChatList />
                    }
                  />
                  <Route
                    path=":chatId"
                    element={
                      <Chats />
                    }
                  />
                </Route>
              </Route>

              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeContext.Provider>
  );
};