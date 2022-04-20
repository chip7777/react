import React from 'react';
import ButtonUA from '@mui/material/Button';

export const Button = (props) => {
  return <ButtonUA variant='outlined' disabled={ props.disabled } onClick={ props.handleClick }>{ props.name }</ButtonUA>;
};
