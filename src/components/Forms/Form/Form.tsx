import React, { useState, FC, memo } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../../store/chats/slice';
import { AUTHOR } from '../../../constants';
import { ThunkDispatch } from 'redux-thunk';
import { ChatState } from '../../../store/chats/slice';
import { AddMessage } from '../../../store/chats/types';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const dispatch =
    useDispatch<ThunkDispatch<ChatState, void, ReturnType<AddMessage>>>();

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      dispatch(
        addMessageWithReply({ chatId, 
          message: { author: AUTHOR.USER, text: value }
        }),
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
