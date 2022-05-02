import React from 'react';
import './index.css';
import { App } from './App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);