import React, { FC } from 'react';
import ButtonUA from '@mui/material/Button';

interface ButtonProps {
  disabled: boolean;
  name: string;
}

export const Button: FC<ButtonProps> = ({ disabled, name }) => {
  return (
    <ButtonUA variant="outlined" type="submit" disabled={disabled} >
      {name}
    </ButtonUA>
  );
};
