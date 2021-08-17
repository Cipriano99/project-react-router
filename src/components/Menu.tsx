import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, PRODUCTS } from '../constants/routes';

export function Menu() {
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={PRODUCTS}>Products</Link>
      </li>
    </ul>
  );
}
