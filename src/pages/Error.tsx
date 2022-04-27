import React, { FC } from 'react';

export const Error: FC = () => {
  const location = window.location.href;
  return (
    <>
      <h2 style={{color:'red'}}> error 404 </h2>
      {location}
    </>
  );
};
