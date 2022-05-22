import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { selectAuth } from '../store/profile/selectors';
import { changeAuth } from '../store/profile/slice';

const navigate = [
  { id: 1, to: '/', name: 'Home' },
  { id: 2, to: '/profile', name: 'Profile' },
  { id: 3, to: '/chats', name: 'Chats' },
  { id: 4, to: '/about', name: 'About' },
  { id: 5, to: '/articles', name: 'Articles' },
];

export const Header: FC = () => {
  const auth = useSelector(selectAuth);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    setError('');
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }

    //dispatch(changeAuth(false));
  };

  return (
    <header>
      <ul>
        {navigate.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {auth ? (
        <button onClick={() => handleSignOut()}>logout</button>
      ) : (
        <>
          <Link to="signin">sign in</Link>
          <br />
          <Link to="signup">sign Up</Link>
        </>
      )}
         {error && <p style={{color: 'red' }}>{error}</p>}
      <main>
        <Outlet />
      </main>
    </header>
  );
};
