import React, { useState, FC, memo } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

interface FormProps {
  addMessage: (a:string) => void;
}

export const Form : FC<FormProps> = memo(({addMessage}) => {
    const [value,setValue] = useState('');    
    const handleInput = (ev:React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);
    };
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        addMessage(value);
        setValue('');
        document.querySelector("input")?.focus();
        
    };

    return (
    <form onSubmit={handleSubmit}>
    <Input handleInput={handleInput} message={value}/>
    <Button name='Send' disabled={!value.length} />
    </form>
  );
});
