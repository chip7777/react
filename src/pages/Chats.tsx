import React, { FC } from 'react';

import { MessageList } from '../components/MessageList/MessageList';
import { Form } from '../components/Forms/Form';
import { ChatList } from '../components/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const chats = useSelector(selectChats);
  const chatList = useSelector(selectChatList);

   if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <MessageList messages={chatId ? chats[chatId] : []} />
      <Form />
    </>
  );
};
