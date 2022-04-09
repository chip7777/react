import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Message} from './components/Message';


ReactDOM.render(
  <App text='text from props' />,
  document.getElementById('root')
);


