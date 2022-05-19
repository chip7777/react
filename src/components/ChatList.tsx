import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../store/chats/slice';
import { selectChatList } from '../store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(selectChatList);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat({ name }));
      setName('');
    }
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink 
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            to={`/chats/${chat.name}`}>{chat.name}</NavLink>
            <button onClick={() => dispatch(deleteChat({ chatId: chat.name }))}>x</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  );
};
