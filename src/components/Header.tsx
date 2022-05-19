import { link } from 'fs';
import React, { FC } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

const navigate = [
  { id: 1, to: '/', name: 'Home' },
  { id: 2, to: '/profile', name: 'Profile' },
  { id: 3, to: '/chats', name: 'Chats' },
  { id: 4, to: '/about', name: 'About' },
  { id: 5, to: '/articles', name: 'Articles' },
];

export const Header: FC = () => {
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
      <main>
        <Outlet />
      </main>
    </header>
  );
};
