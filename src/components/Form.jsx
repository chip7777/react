import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { nanoid } from 'nanoid';


export const Form = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [author,setAuthor] = useState({ men: 'men', bot: 'bot' });
    const [name,setName] = useState('Send');
    const [visible,setVisible] = useState(false);
    
    const handleInput = (ev) => {
        setMessage(ev.target.value);
    };
    const handleClick = () => {
        setMessageList([...messageList, { mess: message, author: author.men }]);
        setMessage('');
        document.querySelector("input").focus();
    };

    const sendMess = (mess) => {
        setMessageList([...messageList, { mess: mess, author: author.bot }]);
        setVisible(messageList.length);
      };

    useEffect(() => {
        if (
          messageList.length &&
          messageList[messageList.length - 1].author === author.men
        ) {
            const timer = setTimeout(() => {
                sendMess('Hello');
                return clearTimeout(timer);
            }, 1500);
          }
      }, [messageList]);

    return (
  <>
    {visible && <ul> 
        {messageList.map((el) => (
          <li key={nanoid()}>{el.author + ' : ' + el.mess}</li>
        ))}
    </ul>}
    <Input handleInput={handleInput} message={message}/>
    <Button name={name} disabled={!message.length} handleClick={handleClick}/>
  </>);
};
