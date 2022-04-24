import React, { FC } from 'react';
import InputUA from '@mui/material/TextField';

interface InputProps{
    handleInput: (ev:React.ChangeEvent<HTMLInputElement>) => void;
    message : string;
};

export const Input: FC<InputProps> = ({handleInput, message}) => {

    return (<InputUA type='text' autoFocus variant='standard' onInput={handleInput} value = { message } />);
}
