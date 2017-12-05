import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Link to="/">
    <button type="button" className="dash-btn">
      Back to Home screen
    </button>
  </Link>
);

export default Header;