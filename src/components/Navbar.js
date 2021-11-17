import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="d-flex m-4 align-items-baseline">
      <Link to="/">
        {' '}
        <h1 className="mx-4"> Bookstore</h1>
      </Link>
      <Link to="/">
        {' '}
        <p className="mx-4"> BOOKS </p>
      </Link>
      <Link to="/categories">
        {' '}
        <p className="mx-4"> CATEGORIES </p>
      </Link>
    </nav>
  </header>
);

export default Navbar;
