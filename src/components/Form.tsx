import React, { useState, useEffect, FC } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { nanoid } from 'nanoid';

interface  messageListType{
    mess: string,
    author : string,
};

export const Form : FC = () => {
    /**@type {} */
    const [messageList, setMessageList] = useState<messageListType[]>([]);
    const [message, setMessage] = useState<string>('');
    const [author,setAuthor] = useState({ men: 'men', bot: 'bot' });
    const [name,setName] = useState('Send');
    const [visible,setVisible] = useState(false);
    
    const handleInput = (ev:React.ChangeEvent<HTMLInputElement>) => {
        setMessage(ev.target.value);
    };
    const handleClick = () => {
        setMessageList([...messageList, { mess: message, author: author.men }]);
        setMessage('');
        document.querySelector("input")?.focus();
    };

    const sendMess = (mess:string) => {
        setMessageList([...messageList, { mess: mess, author: author.bot }]);
        setVisible(!!messageList.length);
      };

    useEffect(() => {
        if (
          messageList.length &&
          messageList[messageList.length - 1].author === author.men
        ) {
            const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
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
