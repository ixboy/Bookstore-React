import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/user-svgrepo-com.svg';

const Navbar = () => (
  <nav className="main-nav">
    <Link to="/">
      <h1 className="navbar-brand"> Bookstore</h1>
    </Link>
    <div className="nav-item">
      <Link to="/">
        <p> BOOKS </p>
      </Link>
    </div>
    <div className="nav-item">
      <Link to="/categories">
        <p> CATEGORIES </p>
      </Link>
    </div>
    <img className="user-avatar" src={avatar} alt="user" />
  </nav>
);

export default Navbar;
