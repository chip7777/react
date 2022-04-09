import React, {Component} from 'react';
import './App.css';
import {Message} from './components/Message';

export class App extends Component {
  render (){
    return <h1><Message text='text'/></h1>
  }
} 

