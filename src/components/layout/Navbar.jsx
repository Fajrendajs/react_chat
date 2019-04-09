import React from 'react';
import { Link } from 'react-router-dom';
import { SignedInLinks } from './SignedInLinks';
import { SignedOutLinks } from './SignedOutLinks';

export const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container" />
      <Link to="/" className="brand-logo">
        ReactPlan
      </Link>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  );
};
