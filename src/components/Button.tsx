import React, { FC } from 'react';
import ButtonUA from '@mui/material/Button';

interface ButtonProps {
  disabled: boolean;
  handleClick: () => void;
  name: string;
}

export const Button: FC<ButtonProps> = ({ disabled, handleClick, name }) => {
  return (
    <ButtonUA variant="outlined" disabled={disabled} onClick={handleClick}>
      {name}
    </ButtonUA>
  );
};
