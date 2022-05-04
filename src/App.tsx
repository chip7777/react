import React, { FC, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { AppRouter } from './components/AppRouter';
import { store, persistor } from './store';
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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};
