import React, { useState, FC, memo } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/chats/actions';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      dispatch(addMessage(chatId, value));
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
