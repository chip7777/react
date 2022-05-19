import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeAuth } from '../store/profile/slice';


export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    
    if (login === 'gb' && password ==='gb'){
      dispatch(changeAuth(true));
      console.log('sign in');
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br/><br/>
        <button type="submit">sign in</button>
        {error && <p style={{color: 'red' }}>Логин и/или пароль не верны!</p>}
      </form>
    </>
  );
};
