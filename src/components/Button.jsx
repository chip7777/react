import React, { Memo } from 'react';

export const Button = (props) => {
  return <button disabled={ props.disabled } onClick={ props.handleClick }>{ props.name }</button>;
};
//export const Button = React.memo(Button2);