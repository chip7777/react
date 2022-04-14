import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  const [messageList, SetMessageList] = useState([]);
  const [message, SetMessage] = useState('');
  const Author = { Men: 'men', Bot: 'bot' };
  const handleInput = (ev) => SetMessage(ev.target.value);

  const handleClick = () => {
    SetMessageList([...messageList, { Mess: message, Author: Author.Men }]);
    SetMessage('');
  };

  const sendMess = () => {
    SetMessageList([...messageList, { Mess: 'Hello', Author: Author.Bot }]);
  };

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].Author === Author.Men
    )
      setTimeout(() => sendMess(), 1500);
  }, [messageList]);

  return (
    <div>
      <ul>
        {messageList.map((el, idx) => (
          <li key={idx}>{el.Author + ' : ' + el.Mess}</li>
        ))}
      </ul>
      <input type='text' onInput={handleInput} value={message}></input>
      <button onClick={handleClick}>send</button>
    </div>
  );
};
