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

  /*
  useEffect(() => {
    if (
      chatId &&
      chats[chatId]?.length > 0 &&
      chats[chatId][chats[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...chats,
          [chatId]: [
            ...chats[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: 'Im BOT',
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, chats, setMessages]);*/

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
