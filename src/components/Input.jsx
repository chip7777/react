import React from 'react';
import InputUA from '@mui/material/TextField';

const InputSource = (props) => {

    return (<InputUA type='text' autoFocus variant='standard' onInput={props.handleInput} value = { props.message } />);
}
export const Input = React.memo(InputSource);