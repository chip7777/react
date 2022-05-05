import React, { useState, FC, memo } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../../store/chats/actions';
import { AUTHOR } from '../../../constants';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from '../../../store/chats/reducer';
import { AddMessage } from '../../../store/chats/types';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      dispatch(
        addMessageWithReply(chatId, { text: value, author: AUTHOR.USER }),
      );
    }
    setValue('');
    document.querySelector('input')?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input handleInput={handleInput} message={value} />
      <Button name="Send" disabled={!value.length} />
    </form>
  );
});
